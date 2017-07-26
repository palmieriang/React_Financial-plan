import React, { Component } from 'react'
import './App.css'

class Spending extends Component {

  render() {
    console.log(this.props.row)

    return (
      <div>
        <div className="box-category first">
          <p>{this.row.name}:</p>
          <div className="box-amount">
            <span>{this.row.amount}</span>
          </div>
        </div>
        <div className="box-category">
          <p>From age:</p>
          <div className="box-amount">
            <span>{this.row.from_age}</span>
          </div>
        </div>
        <div className="box-category">
          <p>To age:</p>
          <div className="box-amount">
            <span>{this.row.to_age}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Spending
