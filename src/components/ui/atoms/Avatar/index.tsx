import React from 'react'
import styled from 'styled-components'

type AvatarProps = {
  src: string
}

const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`

function Avatar({ src }: AvatarProps) {
  return <Image src={src} />
}

export default Avatar
