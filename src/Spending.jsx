import React, { Component } from 'react'
import './App.css'

class Spending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.row.amount
    }
  }

  render() {
    console.log(this.props.row.amount)
    return (
      <div className="box-row">
        <div className="box-category first">
          <p>{this.props.row.name}:</p>
          <input className="box-amount" value={this.state.value} />
        </div>
        <div className="box-category">
          <p>From age:</p>
          <input className="box-amount" value={this.state.value} />
        </div>
        <div className="box-category">
          <p>To age:</p>
          <input className="box-amount" value={this.state.value} />
        </div>
      </div>
    )
  }
}

export default Spending
