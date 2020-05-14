import React, { useState } from 'react'
import { ErrorMessage, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, Form, Input, InputControl, Message } from '../LoginPage/styled'
import Modal from './Modal'
import { addLinks } from './redux/actions'
import { Buttons, CircleButton } from './styled'

// eslint-disable-next-line react/prop-types
function AddLinkModal({ open, toogle, onSubmit }) {
  const { register, handleSubmit, errors } = useForm()

  return (
    <Modal isVisible={open} onClose={() => toogle(false)} title="Add Link">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputControl>
          <Input
            type="text"
            name="url"
            placeholder="URL"
            autoComplete="off"
            autoFocus
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
        <InputControl>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
            ref={register()}
          />
        </InputControl>
        <p>TagsInput is coming</p>
        <Buttons>
          <Button type="submit">Add</Button>
          <Button type="button" btn="danger" onClick={() => toogle(false)}>
            Close
          </Button>
        </Buttons>
      </Form>
    </Modal>
  )
}

function AddLink() {
  const [open, setOpen] = useState(false)
  const toogle = (o) => setOpen(o)
  const dispatch = useDispatch()
  // eslint-disable-next-line no-console
  const onSubmit = (data) => dispatch(addLinks(data.url))

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
      <AddLinkModal open={open} toogle={toogle} onSubmit={onSubmit} />
    </>
  )
}

export default AddLink
