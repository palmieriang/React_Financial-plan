import React, { Component } from 'react'
import './App.css'

class Spending extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {expenditures, incomes} = this.props
    const ListItem = expenditures.map((row) =>
        <div>
          <div className="box-category first">
            <p>{row.name}:</p>
            <div className="box-amount">
              <span>{row.amount}</span>
            </div>
          </div>
          <div className="box-category">
            <p>From age:</p>
            <div className="box-amount">
              <span>{row.from_age}</span>
            </div>
          </div>
          <div className="box-category">
            <p>To age:</p>
            <div className="box-amount">
              <span>{row.to_age}</span>
            </div>
          </div>
        </div>
      )

    return (
      {ListItem}
    )
  }
}

export default Spending
