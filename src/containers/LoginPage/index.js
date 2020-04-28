import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { makeSelectError, makeSelectLoading } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'
import { login } from './actions'
import reducer from './reducer'
import saga from './saga'

import {
  Button,
  Input,
  InputControl,
  LoginContent,
  LoginForm,
  LoginWrapper,
  Message,
  Title,
} from './styled'

const key = 'login'

function Login({ loading, error, onSubmit }) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: 'all',
  })

  useEffect(() => {}, [])

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

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({ email, password }) => {
      dispatch(login(email, password))
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Login)
