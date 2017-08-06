import React, { Component } from 'react'
import './App.css'
import thumbUp from './images/thumbs-up.svg'
import thumbDown from './images/thumb-down.svg'

class Feedback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userFeedback: false,
			feedback: {positive: 0, negative: 0}
		}
		this.addFeedback = this.addFeedback.bind(this)
	}

	addFeedback(event, type) {
    if (type === 'positive') {
      this.setState({
        userFeedback: true,
        feedback: this.state.feedback + 1
      })
    } else if (type === 'negative') {
      this.setState({
        userFeedback: true,
        feedback: this.state.feedback + 1
      })
    }
	}

  render() {
    return (
      <div>
      	{!this.state.userFeedback && <div className='box-feedback'>
	        <span>Was this helpful?</span>
	        <img src={thumbUp} className='icon' alt='thumbUp' onClick={event => this.addFeedback(event, 'positive')} />
	        <img src={thumbDown} className='icon flip' alt='thumbDown' onClick={event => this.addFeedback(event, 'negative')} />
      	</div>}
      	{this.state.userFeedback && <p>Thanks for your feedback!</p>}
      </div>
    )
  }
}

export default Feedback
