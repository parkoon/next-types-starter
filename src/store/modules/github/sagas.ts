import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { getUserInfoAsync, GET_USER_INFO } from './actions'
import { fetchUserInfo } from './api'
import { fetchUserInfoDto } from './api/dto'
import { AxiosResponse } from 'axios'

function* github(action: ReturnType<typeof getUserInfoAsync.request>) {
  try {
    const { data }: AxiosResponse<fetchUserInfoDto> = yield call(fetchUserInfo, action.payload)
    yield put(getUserInfoAsync.success(data))
  } catch (err) {
    yield put(getUserInfoAsync.failure(err))
  }
}

function* watchGithub() {
  yield takeEvery(GET_USER_INFO, github)
}

export function* githubSaga() {
  yield all([fork(watchGithub)])
}
