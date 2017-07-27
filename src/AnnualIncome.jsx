import React, { Component } from 'react'
import './App.css'

class AnnualIncome extends Component {
	render() {
		return (
			<div className="box-row">
				<div className="category-title">
				  <span>Annual Income</span>
				</div>
				<div className="box-category first">
				  <p>Annual salary:</p>
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