import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../LoginPage/styled'
import Modal from './Modal'
import { CircleButton } from './styled'

function AddButton() {
  const [open, setOpen] = useState(true)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }

  return (
    <>
      <CircleButton type="button" onClick={() => setOpen(true)}>
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
      <Modal isVisible={open} onClose={() => setOpen(false)} title='Add Link'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="url"
            placeholder="URL"
            autoComplete="off"
            ref={register({
              required: 'This is required.',
              pattern: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/,
            })}
          />
          <Input
            type="text"
            name="tags"
            placeholder="Tags"
            autoComplete="off"
            ref={register({
              required: 'This is required.',
            })}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  )
}

export default memo(AddButton)
