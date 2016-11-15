import React from 'react'
import style from './InterstitialMessage.scss'

export const InterstitialMessage = (props) => (
    <div className="text-center interstitial-message">
        <img src={props.image}/>
        <h4>{props.message}</h4>
    </div>
)

InterstitialMessage.propTypes = {
    image: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired
}

export default InterstitialMessage
