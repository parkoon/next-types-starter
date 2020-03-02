import * as actions from './actions'
import { AxiosError } from 'axios'
import { ActionType } from 'typesafe-actions'
import { fetchUserInfoDto } from './api/dto'

export type GithubState = {
  userProfile: {
    loading: boolean
    data: fetchUserInfoDto | null
    error: AxiosError | null
  }
}

export type GithubAction = ActionType<typeof actions>
