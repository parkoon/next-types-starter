import React from 'react'
import styled from 'styled-components'

export type InputProps = {
  placeholder: string
}

const StyledInput = styled.input`
  font-size: 18px;
  padding: 0px 10px 10px 5px;
  width: 240px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
`

function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />
}

export default Input
