import React from 'react'
import styled from 'styled-components'
import InputField from '../../molecules/InputFiled'
import ProfileField from '../../molecules/ProfileField'
import { fetchUserInfoDto } from '@/store/modules/github/api/dto'

const GithubWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
  text-align: center;
`

type GithubFieldProps = {
  onSearch: (username: string) => void
  info: fetchUserInfoDto | null
}

function GithubField({ onSearch, info }: GithubFieldProps) {
  return (
    <GithubWrapper>
      <InputField onSearch={onSearch} />
      {info && <ProfileField bio={info.bio} avatar={info.avatar_url} />}
    </GithubWrapper>
  )
}

export default GithubField
