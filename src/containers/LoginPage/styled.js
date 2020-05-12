import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const LoginContent = styled.div`
  height: 50vh;
`

export const Form = styled.form`
  font-size: 0.8rem;
  width: 100%;
  max-width: 540px;
`

export const Title = styled.h1`
  margin-bottom: 3rem;
`

export const InputControl = styled.div`
  margin-bottom: 0.8rem;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #f8f9fa;
  border: 1px solid #f2f2f2;
  border-radius: 7px;
  &:focus {
    outline: 0;
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4dabf7;
  border: 1px solid transparent;
  color: #fff;
  text-transform: uppercase;
  border-radius: 7px;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  &:hover {
    background-color: #74c0fc;
    border: 1px solid transparent;
  }
  &:focus {
    outline: 0;
  }
`

export const Message = styled.small`
  display: block;
  color: #f03e3e;
`
