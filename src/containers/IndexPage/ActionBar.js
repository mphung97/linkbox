import PropTypes from 'prop-types'
import React from 'react'
import { Action, ActionBarWrapper } from './styled'

const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

function ActionBar({ url }) {
  return (
    <ActionBarWrapper>
      <div>
        <Action
          type="button"
          bg="transparent"
          bgh="#f2f2f2"
          onClick={() => copyToClipboard(url)}
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4871 6.60773H20.4871C21.0175 6.60773 21.5262 6.81844 21.9013 7.19351C22.2763 7.56859 22.4871 8.07729 22.4871 8.60773V22.6077C22.4871 23.1382 22.2763 23.6469 21.9013 24.0219C21.5262 24.397 21.0175 24.6077 20.4871 24.6077H8.48706C7.95663 24.6077 7.44792 24.397 7.07285 24.0219C6.69777 23.6469 6.48706 23.1382 6.48706 22.6077V8.60773C6.48706 8.07729 6.69777 7.56859 7.07285 7.19351C7.44792 6.81844 7.95663 6.60773 8.48706 6.60773H10.4871M11.4871 4.60773H17.4871C18.0393 4.60773 18.4871 5.05544 18.4871 5.60773V7.60773C18.4871 8.16001 18.0393 8.60773 17.4871 8.60773H11.4871C10.9348 8.60773 10.4871 8.16001 10.4871 7.60773V5.60773C10.4871 5.05544 10.9348 4.60773 11.4871 4.60773Z"
              stroke="#999999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Action>
        <Action type="button" bg="transparent" bgh="#f2f2f2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V12C4.5 12.2761 4.72386 12.5 5 12.5H8V15.5H5C4.72386 15.5 4.5 15.7239 4.5 16V23C4.5 23.2761 4.72386 23.5 5 23.5H12C12.2761 23.5 12.5 23.2761 12.5 23V20H15.5V23C15.5 23.2761 15.7239 23.5 16 23.5H23C23.2761 23.5 23.5 23.2761 23.5 23V16C23.5 15.7239 23.2761 15.5 23 15.5H16C15.7239 15.5 15.5 15.7239 15.5 16V19H12.5V16C12.5 15.7239 12.2761 15.5 12 15.5H9V12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V5C12.5 4.72386 12.2761 4.5 12 4.5H5ZM5.5 11.5V5.5H11.5V11.5H5.5ZM5.5 22.5V16.5H11.5V22.5H5.5ZM16.5 22.5V16.5H22.5V22.5H16.5Z"
              fill="#999999"
            />
            <path
              d="M18 6.5C17.7239 6.5 17.5 6.72386 17.5 7V10C17.5 10.2761 17.7239 10.5 18 10.5H21C21.2761 10.5 21.5 10.2761 21.5 10V7C21.5 6.72386 21.2761 6.5 21 6.5H18Z"
              fill="#999999"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 4.5C15.7239 4.5 15.5 4.72386 15.5 5V12C15.5 12.2761 15.7239 12.5 16 12.5H23C23.2761 12.5 23.5 12.2761 23.5 12V5C23.5 4.72386 23.2761 4.5 23 4.5H16ZM16.5 11.5V5.5H22.5V11.5H16.5Z"
              fill="#999999"
            />
          </svg>
        </Action>
      </div>
      <Action type="button" bg="transparent" bgh="#f2f2f2">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5989 15.2008C15.1512 15.2008 15.5989 14.7531 15.5989 14.2008C15.5989 13.6486 15.1512 13.2008 14.5989 13.2008C14.0466 13.2008 13.5989 13.6486 13.5989 14.2008C13.5989 14.7531 14.0466 15.2008 14.5989 15.2008Z"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5989 15.2008C22.1512 15.2008 22.5989 14.7531 22.5989 14.2008C22.5989 13.6486 22.1512 13.2008 21.5989 13.2008C21.0466 13.2008 20.5989 13.6486 20.5989 14.2008C20.5989 14.7531 21.0466 15.2008 21.5989 15.2008Z"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.59888 15.2008C8.15116 15.2008 8.59888 14.7531 8.59888 14.2008C8.59888 13.6486 8.15116 13.2008 7.59888 13.2008C7.04659 13.2008 6.59888 13.6486 6.59888 14.2008C6.59888 14.7531 7.04659 15.2008 7.59888 15.2008Z"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Action>
    </ActionBarWrapper>
  )
}

ActionBar.propTypes = {
  url : PropTypes.string
}

export default ActionBar
