import React from 'react'
import styled from 'styled-components'

import Input, { InputProps } from '@components/ui/atoms/Input'
import Button, { ButtonProps } from '@components/ui/atoms/Button'

const StyledInputField = styled.div``

function InputField() {
  return (
    <StyledInputField>
      <Input placeholder="github name..." />
      <Button
        onClick={() => {
          alert('button clicked')
        }}
      >
        입력
      </Button>
    </StyledInputField>
  )
}

export default InputField
