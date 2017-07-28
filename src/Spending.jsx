import React, { Component } from 'react'
import './App.css'

class Spending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.row
    }
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput(event) {
    this.setState({value: event.target.value});
  }

  render() {
    console.log(this.props.row.amount)
    return (
      <div className="box-row">
        <div className="box-category first">
          <p>{this.props.row.name}:</p>
          <input className="box-amount" type="number" value={this.state.value.amount} onChange={this.changeInput} />
        </div>
        <div className="box-category">
          <p>From age:</p>
          <input className="box-amount" type="number" value={this.state.value.from_age} onChange={this.changeInput} />
        </div>
        <div className="box-category">
          <p>To age:</p>
          <input className="box-amount" type="number" value={this.state.value.to_age} onChange={this.changeInput} />
        </div>
      </div>
    )
  }
}

export default Spending
