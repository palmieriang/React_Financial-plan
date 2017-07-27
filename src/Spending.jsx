import React, { Component } from 'react'
import './App.css'

class Spending extends Component {

  render() {
    console.log(this.props.row)

    return (
      <div  className="box-row">
        <div className="box-category first">
          <p>{this.props.row.name}:</p>
          <div className="box-amount">
            <span>{this.props.row.amount}</span>
          </div>
        </div>
        <div className="box-category">
          <p>From age:</p>
          <div className="box-amount">
            <span>{this.props.row.from_age}</span>
          </div>
        </div>
        <div className="box-category">
          <p>To age:</p>
          <div className="box-amount">
            <span>{this.props.row.to_age}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Spending
