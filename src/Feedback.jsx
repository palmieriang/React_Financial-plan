import React, { Component } from 'react'
import './App.css'
import thumbUp from './images/thumbs-up.svg'
import thumbDown from './images/thumb-down.svg'

class Feedback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userFeedback: false,
			positiveFeedback: 0,
			negativeFeedback: 0
		}
		this.addFeedback = this.addFeedback.bind(this)
	}

	addFeedback(event) {
		this.setState({
			userFeedback: true,
			positiveFeedback: this.state.positiveFeedback + 1
		})
	}

  render() {
		console.log(this.state.positiveFeedback);
    return (
      <div className='box-feedback'>
      	{!this.state.userFeedback && <div>
	        <span>Was this helpful?</span>
	        <img src={thumbUp} className='icon' alt='thumbUp' onClick={this.addFeedback} />
	        <img src={thumbDown} className='icon flip' alt='thumbDown' />      		
      	</div>}
      	{this.state.userFeedback && <p>Thanks for your feedback!</p>}
      </div>
    )
  }
}

export default Feedback
