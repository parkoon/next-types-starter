import { createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { fetchUserInfoCommand } from './api/command'
import { fetchUserInfoDto } from './api/dto'

export const GET_USER_INFO = 'github/GET_USER_INFO'
export const GET_USER_INFO_SUCCESS = 'github/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'github/GET_USER_INFO_FAILURE'

export const getUserInfoAsync = createAsyncAction(GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE)<
  fetchUserInfoCommand,
  fetchUserInfoDto,
  AxiosError
>()
