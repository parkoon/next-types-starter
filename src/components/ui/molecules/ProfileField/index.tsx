import React from 'react'
import styled from 'styled-components'
import Avatar from '@components/ui/atoms/Avatar'
import Text from '@components/ui/atoms/Text'

const StyledProfileField = styled.div`
  margin-top: 20px;
`

function ProfileField() {
  return (
    <StyledProfileField>
      <Avatar src="https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" />
      <Text content="hello world" />
    </StyledProfileField>
  )
}

export default ProfileField
