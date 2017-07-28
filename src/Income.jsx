import React, { Component } from 'react'
import './App.css'
import Spending from './Spending'

class Income extends Component {

  render() {
    return (
      <div className="box box-left">
        <div className="box-header">
          <span>Your income & spend</span>
        </div>
        <div className="box-body">

          <div className="category-title">
            <span>Annual Income</span>
          </div>

          {this.props.incomes.map((row, i) => (
            <Spending row={row} key={i} />
            )
          )}

          <div className="category-title">
            <span>Monthly Spending</span>
          </div>

          {this.props.expenditures.map((row, i) => (
            <Spending row={row} key={i} />
            )
          )}

        </div>
      </div>
    )
  }
}

export default Income