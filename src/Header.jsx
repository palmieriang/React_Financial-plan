import React, { Component } from 'react'
import './App.css'

class Header extends Component {
  render() {
    return (
        <div className='App-header'>
          <div className='logo'>
            <span>Hatch</span>
          </div>
          <div className='menu'>
            <span>Your financial plan</span>
            <span>Tips & blogs</span>
          </div>
          <div className='user-button'>
            <span>Logout</span>
          </div>
        </div>
    );
  }
}

export default Header
