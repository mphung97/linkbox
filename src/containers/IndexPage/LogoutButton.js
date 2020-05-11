import { logout } from 'containers/App/actions'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { CircleButton } from './styled'

function LogoutButton() {
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())

  return (
    <CircleButton type="button" onClick={handleLogout}>
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4871 23.4147H7.48706C6.95663 23.4147 6.44792 23.204 6.07285 22.8289C5.69777 22.4539 5.48706 21.9452 5.48706 21.4147V7.41473C5.48706 6.8843 5.69777 6.37559 6.07285 6.00052C6.44792 5.62545 6.95663 5.41473 7.48706 5.41473H11.4871M18.4871 19.4147L23.4871 14.4147M23.4871 14.4147L18.4871 9.41473M23.4871 14.4147H11.4871"
          stroke="#121212"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </CircleButton>
  )
}

export default memo(LogoutButton)
