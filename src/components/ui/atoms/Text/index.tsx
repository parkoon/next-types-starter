import React from 'react'
import styled from 'styled-components'

type TextProps = {
  content: string
}

const StyledText = styled.span`
  font-size: 18px;
  font-weight: bold;
`

function Text({ content }: TextProps) {
  return <StyledText>{content}</StyledText>
}

export default Text
