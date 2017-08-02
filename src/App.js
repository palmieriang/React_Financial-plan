import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Income from './Income'
import Saving from './Saving'

const data = {
  'incomes' : [
    {
      'amount' : 45300,
      'from_age' : 30,
      'to_age' : 67,
      'frequency' : 'annual' ,
      'name' :  'Annual salary'
    }
  ],
  'expenditures' : [
    {
      'amount' : 1199,
      'from_age' : 30,
      'to_age' : 65,
      'frequency' : 'monthly' ,
      'name' :  'Mortgage'
    },
    {
      'amount' : 1199,
      'from_age' : 30,
      'to_age' : 65,
      'frequency' : 'monthly' ,
      'name' :  'Bills'
    },
    {
      'amount' : 1199,
      'from_age' : 30,
      'to_age' : 65,
      'frequency' : 'monthly' ,
      'name' : 'General spending'
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='app-body'>
          <Income {...data} />
          <Saving {...data} />
        </div>
      </div>
    );
  }
}

export default App
