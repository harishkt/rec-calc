import React , { Component } from 'react';
import { Button,
	ContainedButton,
	InputLabel,
	GridList,
	GridListTile,
	Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	rootStyles: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		width: '400px'
		// heigth: '600'
	},
	gridStyles: {
		width: '80%'
	},
	screen: {
		borderStyle: 'solid'
	}
});


class Calculator extends Component {
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
		const { classes } = this.props;
		const { displayedValue } = this.state;
		return(
			<Grid className={classes.rootStyles}>
				<GridList cols={1}  cellHeight={50} className={classes.gridStyles} style={{width: '80%'}}>
					<span className={classes.screen}>{displayedValue}</span>
				</GridList>
				
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="AC">AC</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="+">+/-</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="%">%</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="/">/</Button></GridListTile>
				</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="7">7</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="8">8</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="9">9</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="*">*</Button></GridListTile>
				</GridList>
					<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="4">4</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="5">5</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="6">6</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="-">-</Button></GridListTile>
				</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="1">1</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="2">2</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="3">3</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="+">+</Button></GridListTile>
				</GridList>
				<GridList cols={3} cellHeight={50} className={classes.gridStyles} >
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="0">0</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value=".">.</Button></GridListTile>
					<GridListTile><Button variant="contained" onClick={this.handleClick} value="=">=</Button></GridListTile>
				</GridList>
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
			</Gr> */}
				
			</Grid>
		)
	}
}
export default  withStyles(styles)(Calculator);