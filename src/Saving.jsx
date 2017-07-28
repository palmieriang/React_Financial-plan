import React, { Component } from 'react'
import './App.css'

class Saving extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      value: this.props.row
    }
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  render() {
    const expenditures = this.props.expenditures
    const ListItem = expenditures.map((row, i) =>
      <div className="box-range" key={i} >
        <span>{row.name}</span>
        <input type="range" min="0" max={row.amount} value={row.amount} step="1" onChange={this.changeInput} />
      </div>
    )

    return (
      <div className="box box-rigth">
        <div className="box-header">
          <span>Spend Less</span>
        </div>
        <div className="box-body">
          <p>Try reducing your monthly spending to see how your forecast could improve!</p>

          {ListItem}

        </div>
      </div>
    )
  }
}

export default Saving
