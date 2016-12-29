import React from 'react'
import InterstitialMessage from 'components/InterstitialMessage'

let NotFound = (props) => (
  <InterstitialMessage
    message="Oh dear! That page doesn't exist"
    image="/not_found.png"
  />
)

export default NotFound
