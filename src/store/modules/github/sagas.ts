import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { getUserInfoAsync, GET_USER_INFO } from './actions'
import { fetchUserInfo } from '../../../api/github'
import { GithubProfile } from './types'
function* github(action: ReturnType<typeof getUserInfoAsync.request>) {
  try {
    const res: GithubProfile = yield call(fetchUserInfo, action.payload)
    yield put(getUserInfoAsync.success(res))
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
