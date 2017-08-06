import React, { Component } from 'react'
import './App.css'
import Income from './Income'
import Saving from './Saving'
import Header from './Header'

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
        <Header />
        <div className='app-body'>
          <Income {...data} />
          <Saving {...data} />
        </div>
      </div>
    );
  }
}

export default App
