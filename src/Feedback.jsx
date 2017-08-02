import React, { Component } from 'react'
import './App.css'
import thumbUp from './images/thumbs-up.svg'
import thumbDown from './images/thumb-down.svg'

class Feedback extends Component {
  render() {
    return (
      <div className='box-feedback'>
        <span>Was this helpful?</span>
        <img src={thumbUp} className='icon' alt='thumbUp' />
          <img src={thumbDown} className='icon flip' alt='thumbDown' />
      </div>
    )
  }
}

export default Feedback