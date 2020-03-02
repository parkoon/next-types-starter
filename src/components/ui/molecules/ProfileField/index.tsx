import React from 'react'
import styled from 'styled-components'
import Avatar from '@components/ui/atoms/Avatar'
import Text from '@components/ui/atoms/Text'

const StyledProfileField = styled.div`
  margin-top: 20px;
`

type ProfileFiledProps = {
  bio: string
  avatar: string
}

function ProfileField({ avatar, bio }: ProfileFiledProps) {
  return (
    <StyledProfileField>
      <Avatar src={avatar} />
      <Text content={bio} />
    </StyledProfileField>
  )
}

export default ProfileField
