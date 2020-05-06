import { login } from 'containers/App/actions'
import { selectError, selectLoading, selectLoggedIn } from 'containers/App/selectors'
import React, { useEffect } from 'react'
import { ErrorMessage, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import history from 'utils/history'
import { useInjectSaga } from 'utils/injectSaga'
import saga from './saga'
import { Button, Input, InputControl, LoginContent, LoginForm, LoginWrapper, Message, Title } from './styled'

const key = 'login'

// eslint-disable-next-line no-unused-vars
function Login(props) {
  const isLoggedIn = useSelector(selectLoggedIn)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()
  const onSubmit = ({ email, password }) => dispatch(login(email, password))

  useInjectSaga({ key, saga })

  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: 'all',
  })

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/')
    }
  }, [isLoggedIn])

  return (
    <LoginWrapper>
      <LoginContent>
        <Title>Login to your account</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputControl>
            <Input
              ref={register({ required: 'This is required.' })}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="on"
            />
            <ErrorMessage errors={errors} name="email">
              {({ message }) => <Message>{message}</Message>}
            </ErrorMessage>
          </InputControl>
          <InputControl>
            <Input
              ref={register({
                required: 'This is required.',
                minLength: {
                  value: 8,
                  message: 'Min length 8',
                },
                maxLength: {
                  value: 32,
                  message: 'Max length 32',
                },
              })}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
            />
            <ErrorMessage errors={errors} name="password">
              {
                ({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <Message key={type}>{message}</Message>
                  ))
                // eslint-disable-next-line react/jsx-curly-newline
              }
            </ErrorMessage>
            {error && <Message>{error}</Message>}
          </InputControl>
          <Button type="submit" disabled={loading} name="login">
            {loading ? 'loading' : 'get started'}
          </Button>
        </LoginForm>
      </LoginContent>
    </LoginWrapper>
  )
}
export default Login
