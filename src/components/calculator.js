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
		position: 'absolute',
    	top: '50%',
    	left: '50%',
    	marginTop: '-50px',
    	marginLeft: '-50p',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		width: '400px'
		// heigth: '600'
	},
	gridStyles: {
		width: '100%'
	},
	screen: {
		borderStyle: 'solid'
	}
});

const Tile = ({ value, handleClick }) => {
	return(
		<GridListTile key={value}>
			<Button variant="contained" onClick={handleClick} value={value} style={{float: 'left'}}>{value}</Button>
		</GridListTile>
	)
};

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
		const value = event.currentTarget.value;
		console.log(`handleClick triggered with value - ${value}`);
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
			default: break;
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
				<GridList cols={1}  cellHeight={50} className={classes.gridStyles}>
					<span className={classes.screen}>{displayedValue}</span>
				</GridList>
				
				<GridList cols={3}  cellHeight={50} className={classes.gridStyles} >
					<Tile value="AC" handleClick={this.handleClick} />
					<Tile value="%" handleClick={this.handleClick} />
					<Tile value="/" handleClick={this.handleClick} />
				</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<Tile value="7" handleClick={this.handleClick} />
					<Tile value="8" handleClick={this.handleClick} />
					<Tile value="9" handleClick={this.handleClick} />
					<Tile value="*" handleClick={this.handleClick} />
				</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<Tile value="4" handleClick={this.handleClick} />
					<Tile value="5" handleClick={this.handleClick} />
					<Tile value="6" handleClick={this.handleClick} />
					<Tile value="-" handleClick={this.handleClick} />
				</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
					<Tile value="1" handleClick={this.handleClick} />
					<Tile value="2" handleClick={this.handleClick} />
					<Tile value="3" handleClick={this.handleClick} />
					<Tile value="4" handleClick={this.handleClick} />
				</GridList>
				<GridList cols={3} cellHeight={50} className={classes.gridStyles} >
					<Tile value="0" handleClick={this.handleClick} />
					<Tile value="." handleClick={this.handleClick} />
					<Tile value="=" handleClick={this.handleClick} />
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