import GithubField from '@/components/ui/organism/GithubField'
import { InitialAppProps } from '@/interfaces/InitialProps'
import { getUserInfoAsync } from '@/store/modules/github'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/modules'

function HomePage() {
  const userProfile = useSelector((state: RootState) => state.github.userProfile)
  return (
    <>
      <h1>{JSON.stringify(userProfile)}</h1>
      <GithubField />
    </>
  )
}

HomePage.getInitialProps = ({ store }: InitialAppProps) => {
  store.dispatch(getUserInfoAsync.request({ username: 'parkoon' }))
}

export default HomePage
