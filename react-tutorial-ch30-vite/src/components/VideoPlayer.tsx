import {useRef} from 'react'


function VideoPlayer(){
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayClick(){
    videoRef.current?.play();
  }

  function handlePauseClick(){
    videoRef.current?.pause();
  }

  return(
    <>
      <h2>Video Player Widget</h2>
      <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button>
      <video ref={videoRef} width="300" controls src="https://res.cloudinary.com/dbfn5lnvx/video/upload/v1599125933/react-tutorial/ref-video-player-challenge.mp4" />
    </>
  )
}

export default VideoPlayer;