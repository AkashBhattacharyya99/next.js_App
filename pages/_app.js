import Navber from '../components/navber'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navber />
  <Component {...pageProps} />
  </>
}

export default MyApp
