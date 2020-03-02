import { AppContext, AppInitialProps } from 'next/app'
import { Store } from 'redux'
import { RootState } from '@store/modules'

export type InitialAppProps = AppContext &
  AppInitialProps & {
    store: Store<RootState>
  }
