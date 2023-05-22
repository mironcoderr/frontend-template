import '@/public/fonts/montserrat.css'
import '@/public/icons/iconly.css'
import '@/styles/tailwind.css'
import '@/styles/custom.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }) {
    return (
        <Provider store={ store }>
            <Component {...pageProps} />
        </Provider>
    )
}
