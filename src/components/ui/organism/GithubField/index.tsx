import React from 'react'
import styled from 'styled-components'
import InputField from '../../molecules/InputFiled'
import ProfileField from '../../molecules/ProfileField'

const GithubWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
  text-align: center;
`

function GithubField() {
  return (
    <GithubWrapper>
      <InputField />
      <ProfileField />
    </GithubWrapper>
  )
}

export default GithubField
