import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import data from '../../assets/data/data';
import styles from './Adventure.css';


/* NOTE
-Last possible toggle, to have a start/end title above video?  
-Will want to take out 'controls' on video player
  -Will need to fill in correct data: values, options, videos
  -Will need to push up
  -Will need to deploy on netlify
  -May need to add something extra to config to get assets to show
  -If above is true reference previous netlify builds
  -Will want to make a folder for videos and fix all paths
*/

export default function Adventure() {
  const [start, setStart] = useState(true);
  const [ended, setEnded] = useState(false);
  const [src, setSrc] = useState(data.get('start').src);
  const [option1Value, setOption1Value] = useState('');
  const [option2Value, setOption2Value] = useState('');
  const [option1Text, setOption1Text] = useState('');
  const [option2Text, setOption2Text] = useState('');
  const [singleButtonText, setSingleButtonText] = useState('START ADVENTURE');

  const startAdventure = () => {
    setOption1Value(data.get('beginning').option1Value);
    setOption2Value(data.get('beginning').option2Value);
    setSrc(data.get('beginning').src);
    setOption1Text(data.get('beginning').option1Text);
    setOption2Text(data.get('beginning').option2Text);
    setEnded(false);
    setStart(false);
  };

  const reset = (e) => {
    const optionSelected = e.target.value;
    if(optionSelected.includes('ending')) {
      setStart(true);
      setSingleButtonText('BEGIN ADVENTURE AGAIN');
    }
    setSrc(data.get(optionSelected).src);
    setOption1Value(data.get(optionSelected).option1Value);
    setOption2Value(data.get(optionSelected).option2Value);
    setOption1Text(data.get(optionSelected).option1Text);
    setOption2Text(data.get(optionSelected).option2Text);
    setEnded(false);
  };

  if(ended && start) {
    return (
      <div className={styles.videoWrapper}>
        <ReactPlayer
          url={src} 
          playing
          controls
          width='95%'
          height='45%' 
          loop={false} 
          onEnded={() => setEnded(true)} />
        <button className={styles.button} onClick={startAdventure}>{singleButtonText}</button>
      </div>
    );
  } else if(ended){
    return (
      <div className={styles.videoWrapper}>
        <ReactPlayer 
          url={src} 
          playing 
          controls
          width='95%'
          height='45%'
          loop={false} 
          onEnded={() => setEnded(true)} />
        <div className={styles.buttonWrapper}>
          <button className={styles.button} value={option1Value} onClick={(e) => reset(e)}>{option1Text}</button>
          <button className={styles.button} value={option2Value} onClick={(e) => reset(e)}>{option2Text}</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.videoWrapper}>
        <ReactPlayer 
          url={src} 
          playing 
          controls
          width='95%'
          height='45%'
          loop={false} 
          onEnded={() => setEnded(true)} />
      </div>
    );
  }
}
