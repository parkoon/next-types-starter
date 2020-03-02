import { createReducer } from 'typesafe-actions'
import { GithubState, GithubAction } from './types'
import { GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE } from './actions'

const intialState: GithubState = {
  userProfile: {
    data: null,
    error: null,
    loading: false,
  },
}

const github = createReducer<GithubState, GithubAction>(intialState, {
  [GET_USER_INFO]: (state, action) => ({
    ...state,
    userProfile: {
      data: null,
      loading: true,
      error: null,
    },
  }),
  [GET_USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      data: action.payload,
      loading: true,
      error: null,
    },
  }),
  [GET_USER_INFO_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      data: null,
      loading: false,
      error: action.payload,
    },
  }),
})

export default github
