import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GithubField from '@/components/ui/organism/GithubField'
import { RootState } from '@/store/modules'
import { getUserInfoAsync } from '@/store/modules/github'

function GithubContainer() {
  const dispatch = useDispatch()
  const userProfie = useSelector((state: RootState) => state.github.userProfile)
  const { data, error, loading } = userProfie

  const handleSearch = (username: string) => {
    dispatch(getUserInfoAsync.request({ username }))
  }
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>JSON.stringify(error)</h3>}
      <GithubField info={data} onSearch={handleSearch} />
    </>
  )
}

export default GithubContainer
