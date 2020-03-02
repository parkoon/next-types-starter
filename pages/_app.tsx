import { Provider } from 'react-redux'
import reduxWrapper from 'next-redux-wrapper'
import configureStore from '@/store/configureStore'
import { InitialAppProps } from '@/interfaces/InitialProps'
import withReduxSaga from 'next-redux-saga'

function App({ Component, pageProps, store }: InitialAppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: InitialAppProps) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default reduxWrapper(configureStore)(withReduxSaga(App))
