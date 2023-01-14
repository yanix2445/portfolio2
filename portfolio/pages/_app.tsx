import 'styles/globals.scss'
import 'styles/navbar.scss'
import 'styles/about.scss'
// import 'styles/script/navbar.js'
import 'styles/index.scss'
import 'styles/services.scss'
import 'styles/portfolio.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
