import React from 'react'
import * as Components from '../components'

export default () => {
  return (
    <Components.L0.GlobalWrapper title='Home'>
      <Components.L1.Canvas3D
        scenes={['Default']}
        id='MainScene'
      />
      <audio src='./audio/Regalo para luis .wav'/>
    </Components.L0.GlobalWrapper>
  )
}
