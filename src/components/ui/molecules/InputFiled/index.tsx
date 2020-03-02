import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import Input, { InputProps } from '@components/ui/atoms/Input'
import Button, { ButtonProps } from '@components/ui/atoms/Button'

const StyledInputField = styled.div``

type InputFieldProps = {
  onSearch: (username: string) => void
}

function InputField({ onSearch }: InputFieldProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (!value) return

    onSearch(value)
  }

  return (
    <StyledInputField>
      <Input onChange={handleChange} value={value} placeholder="github name..." />
      <Button onClick={handleClick}>입력</Button>
    </StyledInputField>
  )
}

export default InputField
