import '../styles/globals.css'
import '../styles/bg.css'
import { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {loading ? (
        <Skeleton>
          <Component {...pageProps} />
        </Skeleton>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
