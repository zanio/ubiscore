import '../styles/index.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
