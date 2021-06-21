import '../styles/globals.css'
import '../styles/bg.css'
import { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import ReactAudioPlayer from 'react-audio-player';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {loading ? (
        <Skeleton>
          <Component {...pageProps} />
        </Skeleton>
      ) : (
        <>
          <Component {...pageProps} />
          {/* <ReactAudioPlayer
            src="https://www.youtube.com/watch?v=bbEhIZlIPyQ"
            autoPlay
            controls
          /> */}
        </>
      )}
    </>
  )
}

export default MyApp
