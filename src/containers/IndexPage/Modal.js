import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { CircleButton, H4 } from './styled'

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-1150px);
  }
  to {
    transform: translateY(0);
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: ${appear};
  animation-duration: 300ms;
`

const ModalDialog = styled.div`
  width: 100%;
  max-width: 540px;
  background: white;
  position: relative;
  border-radius: 7px;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${slideIn};
  animation-duration: 0.5s;
`
const ModalContent = styled.div`
  border-radius: 7px;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const CloseButton = styled(CircleButton)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`

function Modal({
  isVisible = false,
  title,
  onClose,
  children,
}) {
  function keydownHandler({ key }) {
    switch (key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  })

  return !isVisible ? null : (
    <ModalWrapper onClick={onClose}>
      <ModalDialog onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <CloseButton type="button" onClick={onClose}>
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5989 8.20084L8.59888 20.2008M8.59888 8.20084L20.5989 20.2008"
                stroke="#121212"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseButton>
          {title && (
            <ModalHeader>
              <H4>{title}</H4>
            </ModalHeader>
          )}
          {children}
        </ModalContent>
      </ModalDialog>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element,
}

export default Modal