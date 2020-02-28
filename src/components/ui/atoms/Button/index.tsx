import React from 'react'
import styled from 'styled-components'

export type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

const StyledButton = styled.button`
  position: relative;

  padding: 0;

  overflow: hidden;
  padding: 7px 27px;
  font-size: 14px;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #34495e;
  color: #ecf0f1;

  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3e50;
  }
`

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
