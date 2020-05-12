import React, { useState } from 'react'
import { ErrorMessage, useForm } from 'react-hook-form'
import { Button, Form, Input, InputControl, Message } from '../LoginPage/styled'
import Modal from './Modal'
import { CircleButton, Buttons } from './styled'

function AddLink() {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const toogle = (o) => setOpen(o)
  const onSubmit = () => console.log('click')

  return (
    <>
      <CircleButton type="button" onClick={() => toogle(true)}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5989 7.20084V21.2008M7.59888 14.2008H21.5989"
            stroke="#121212"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CircleButton>
      <Modal isVisible={open} onClose={() => toogle(false)} title="Add Link">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputControl>
            <Input
              type="text"
              name="url"
              placeholder="URL"
              autoComplete="off"
              ref={register({
                required: 'This is required.',
                pattern: {
                  value: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/,
                  message: 'Invalid URL',
                },
              })}
            />
            <ErrorMessage errors={errors} name="url">
              {({ message }) => <Message>{message}</Message>}
            </ErrorMessage>
          </InputControl>
          <p>Title is coming</p>
          <p>TagsInput is coming</p>
          <Buttons>
            <Button type="submit">Add</Button>
            <Button type="submit">Close</Button>
          </Buttons>
        </Form>
      </Modal>
    </>
  )
}

export default AddLink
