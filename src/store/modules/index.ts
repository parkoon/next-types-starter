import { combineReducers } from 'redux'
import github, { githubSaga } from './github'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  github,
})

export function* rootSaga() {
  yield all([githubSaga()])
}
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
