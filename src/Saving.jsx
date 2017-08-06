import React, { Component } from 'react'
import './App.css'
import Feedback from './Feedback'

class ListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.row,
      diff1: 0,
      diff2: 0,
      diff3: 0,
      total: 0
    }
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput(event) {
    this.setState({
      value: event.target.value,
      diff1: this.props.row.amount - event.target.value,
      diff2: this.props.row.amount - event.target.value,
      diff3: this.props.row.amount - event.target.value,
      total: this.state.diff1 + this.state.diff2 + this.state.diff3
    })
  }

  render () {
    const {row, index} = this.props

    return (
      <div className='row-range'>
        <span><strong>{row.name}</strong></span>
        <input type='range' min='0' max={row.amount} value={this.state.value.amount} step='1' onChange={event => this.changeInput(event, index)} />
      </div>
    )
  }
}

class Saving extends Component {

  render() {
    const {expenditures} = this.props

    return (
      <div className='box box-rigth'>
        <div className='box-header'>
          <span>Spend Less</span>
        </div>
        <div className='box-body'>
          <p>Try reducing your monthly spending to see how your forecast could improve!</p>
          <div className="box-range">
            {expenditures.map((row, i) => <ListItem key={i} row={row} index={i} />)}
          </div>
          <p><strong>This means you’re saving <span className='green'>TOT</span> per month</strong></p>
          <a className='find-button green' rel="noopener noreferrer" href='https://www.google.co.uk/' target='_blank'>Find ways to save</a>
          <Feedback />
        </div>
      </div>
    )
  }
}

export default Saving
