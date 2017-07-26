import React, { Component } from 'react'
import './App.css'

class Saving extends Component {

	constructor(props) {
		super(props)
		console.log(props.incomes[0])
	}

	render() {
		const expenditures = this.props.expenditures
		const ListItem = expenditures.map((row) => 
			<div className="box-range">
				<span>{row.name}</span>
				<input type="range" />
			</div>
		)

		return (
			<div className="box box-left">
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
