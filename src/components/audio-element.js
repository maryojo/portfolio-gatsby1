import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import myIntro from '../images/01-genesis-24.mp3'
// import './audio-element.module.css'


const AudioElement = () =>{
  return(
    <AudioPlayer
    src={myIntro}
    autoPlay={false}
    showJumpControls={false} 
    customAdditionalControls={[]}
    header="Hearing my voice sounds so much welcoming!"
    style={{
    width: '100%'
    // color: red
  }}
    />
  )
}

export default AudioElement