import React , { Component } from 'react';
import { Button,
	ContainedButton,
	InputLabel,
	GridList,
	GridListTile
} from '@material-ui/core';

const rootStyles = {
	display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
	overflow: 'hidden',
	width: '400',
	heigth: '600'
}
const gridStyles = {
	width: '100',
	height: '150'
}

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.calculatedValue = '';
		this.state = {
			displayedValue: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('handleClick triggered');
		const value = event.target.value;
		const { displayedValue } = this.state;
		let updatedValue = displayedValue;
		console.log(`calculatedValue is ${this.calculatedValue}`)
		switch(value) {
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				updatedValue += value;
				this.calculatedValue += value;
				break;
			case '+':
			case '-':
			case '*':
			case '/':
			case '%':
			case '.':
				this.calculatedValue += value
				updatedValue = this.calculatedValue;
				break;
			case '=': 
				updatedValue = eval(this.calculatedValue);
				this.calculatedValue = updatedValue;
				break;
			case 'AC':
				updatedValue = '';
				this.calculatedValue = '';
				break;
		}
		
		this.setState({
			displayedValue: updatedValue
		});
	}
	render() {
		const { displayedValue } = this.state;
		return(
			<div>
				<div>{displayedValue}</div>
				<div>
					<Button variant="contained" onClick={this.handleClick} value="AC">AC</Button>
					<Button variant="contained" onClick={this.handleClick} value="+">+/-</Button>
					<Button variant="contained" onClick={this.handleClick} value="%">%</Button>
					<Button variant="contained" onClick={this.handleClick} value="/">/</Button>
				</div>
				<div>
					<Button variant="contained" onClick={this.handleClick} value="7">7</Button>
					<Button variant="contained" onClick={this.handleClick} value="8">8</Button>
					<Button variant="contained" onClick={this.handleClick} value="9">9</Button>
					<Button variant="contained" onClick={this.handleClick} value="*">*</Button>
				</div>
				<div>
					<Button variant="contained" onClick={this.handleClick} value="4">4</Button>
					<Button variant="contained" onClick={this.handleClick} value="5">5</Button>
					<Button variant="contained" onClick={this.handleClick} value="6">6</Button>
					<Button variant="contained" onClick={this.handleClick} value="-">-</Button>
				</div>
				<div>
					<Button variant="contained" onClick={this.handleClick} value="1">1</Button>
					<Button variant="contained" onClick={this.handleClick} value="2">2</Button>
					<Button variant="contained" onClick={this.handleClick} value="3">3</Button>
					<Button variant="contained" onClick={this.handleClick} value="+">+</Button>
				</div>
				<div>
					<Button variant="contained" onClick={this.handleClick} value="0">0</Button>
					<Button variant="contained" onClick={this.handleClick} value=".">.</Button>
					<Button variant="contained" onClick={this.handleClick} value="=">=</Button>
				</div>
			{/* <div  className={rootStyles}>
				<GridList
						cellHeight={300}
						className={gridStyles}
						cols={3}
					>
						<GridListTile key='AC'>
							<Button variant="contained" value='AC'>AC</Button>
						</GridListTile>
						<GridListTile key='AC'>
							<Button variant="contained" value='AC'>AC</Button>
						</GridListTile>
						<GridListTile key='AC'>
							<Button variant="contained" value='AC'>AC</Button>
						</GridListTile>
					</GridList>
					<InputLabel />
					<Button>ClickMe</Button>
			</div> */}
				
			</div>
		)
	}
}
