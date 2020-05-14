import React from 'react'
import styled, { keyframes } from 'styled-components'

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }`

const Wrapper = styled.div`
  z-index: 1000;
  opacity: 1;
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
`

const Loader = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #000;
  top: 50%;
  animation: ${loader} 2s infinite ease;
`

export default function LoadingIndicator() {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  )
}
