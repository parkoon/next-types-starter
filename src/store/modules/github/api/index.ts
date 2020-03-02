import axios from 'axios'

import { fetchUserInfoDto } from './dto'
import { fetchUserInfoCommand } from './command'

export const fetchUserInfo = ({ username }: fetchUserInfoCommand) =>
  axios.get<fetchUserInfoDto>(`https://api.github.com/users/${username}`)
