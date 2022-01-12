import '../styles/globals.scss'
import '../styles/tailwindstyles.css'
import {DataProvider} from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
     <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
