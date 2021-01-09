import React, { useEffect } from 'react'

const DrumPad = (props) => {

  const handleKeyPress = (event) => {
    if (event.keyCode === props.keyCode && props.power) {
      props.playAudio(props.keyTrigger, props.id)
    }
  };
  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress, false);

    return () => {
      window.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <div className='drum-pad' id={props.id} onClick={() => props.playAudio(props.keyTrigger, props.id)}>
      <audio className='clip' id={props.keyTrigger} src={props.url} />
      {props.keyTrigger}
    </div>
  )
}

export default DrumPad