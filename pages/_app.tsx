import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { useStore } from '../store/store'
import NextNprogress from 'nextjs-progressbar'
import { Global } from '../styles/global'

const App = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{ showSpinner: false }}
            />
            <Global />
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
