import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm, ErrorMessage } from 'react-hook-form'
// import axios from 'axios'
import {
  LoginWrapper,
  LoginContent,
  LoginForm,
  Title,
  InputControl,
  Input,
  Button,
  Message,
} from './styled'

import { login } from '../App/actions'

function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: 'all',
  })
  const [beMessage, setbeMessage] = useState(null)
  useEffect(() => {
  }, [])

  const onSubmit = (data) => {
    const { dispatch } = props
    dispatch(login(data.email, data.password))

  }

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
            {beMessage && <Message>{beMessage}</Message>}
          </InputControl>
          <Button type="submit" name="login">
            get started
          </Button>
        </LoginForm>
      </LoginContent>
    </LoginWrapper>
  )
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Login)
