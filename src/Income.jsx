import React, { Component } from 'react'
import './App.css'
import Spending from './Spending'

class Income extends Component {

  render() {

    const {incomes, expenditures} = this.props

    return (
      <div className='box box-left'>
        <div className='box-header'>
          <span>Your income & spend</span>
        </div>
        <div className='box-body'>

          <div className='category-title'>
            <span>Annual Income</span>
          </div>

          {incomes.map((row, i) => (
            <Spending row={row} key={i} />
            )
          )}

          <div className='category-title'>
            <span>Monthly Spending</span>
          </div>

          {expenditures.map((row, i) => (
            <Spending row={row} key={i} />
            )
          )}

        </div>
      </div>
    )
  }
}

export default Income
