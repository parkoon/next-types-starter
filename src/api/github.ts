import axios from 'axios'

import { GithubProfile } from '@store/modules/github/types'

export const fetchUserInfo = async (username: string) => {
  const { data } = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`)
  return data
}
