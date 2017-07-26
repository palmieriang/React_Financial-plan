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
					<div className="box-category first">
						<p>Annual salary:</p>
						<div className="box-amount">
							<span>{this.props.incomes[0].amount}</span>
						</div>
					</div>
					<div className="box-category">
						<p>From age:</p>
						<div className="box-amount">
							<span>{this.props.incomes[0].from_age}</span>
						</div>
					</div>
					<div className="box-category">
						<p>To age:</p>
						<div className="box-amount">
							<span>{this.props.incomes[0].to_age}</span>
						</div>
					</div>

					<div className="category-title">
						<span>Monthly Spending</span>
					</div>


			    this.props.expenditures.map((row) => (
			    	<Spending row={this.props.row} />
						)
			    )

					<div className="box-category first">
						<p>Mortgage:</p>
						<div className="box-amount">
							<span>{this.props.expenditures[0].amount}</span>
						</div>
					</div>
					<div className="box-category">
						<p>From age:</p>
						<div className="box-amount">
							<span>{this.props.expenditures[0].from_age}</span>
						</div>
					</div>
					<div className="box-category">
						<p>To age:</p>
						<div className="box-amount">
							<span>{this.props.expenditures[0].to_age}</span>
						</div>
					</div>


				</div>
			</div>
		)
	}
}

export default Income
