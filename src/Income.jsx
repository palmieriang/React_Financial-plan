import React, { Component } from 'react'
import './App.css'

class Income extends Component {

	constructor(props) {
		super(props)
		console.log(props.incomes[0])
	}

	render() {
		const expenditures = this.props.expenditures
		const listItem = expenditures.map((row) => 
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

					{listItem}


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