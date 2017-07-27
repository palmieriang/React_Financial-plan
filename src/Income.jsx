import React, { Component } from 'react'
import './App.css'
import Spending from './Spending'

class Income extends Component {

  render() {

    console.log(this.props.expenditures)

    this.props.expenditures.map((row) => console.log(row)
    )

    return (

      <div className="box box-left">
        <div className="box-header">
          <span>Your income & spend</span>
        </div>
        <div className="box-body">

          {this.props.incomes.map((row) => (
            <Spending row={row} key={row.name} />
            )
          )}

          <div className="category-title">
            <span>Monthly Spending</span>
          </div>

          {this.props.expenditures.map((row) => (
            <Spending row={row} key={row.name} />
            )
          )}

        </div>
      </div>
    )
  }
}

export default Income
