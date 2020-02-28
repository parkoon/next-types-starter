import { AppContext, AppInitialProps } from 'next/app'

type AppProps = AppContext & AppInitialProps & {}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default App
