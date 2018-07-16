import React , { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import DisplayCalculator from './display';

const styles = theme => ({
	rootStyles: {
		position: 'absolute',
    	top: '40%',
    	left: '40%',
    	marginTop: '-50px',
    	marginLeft: '-50p',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		width: '400px',
		backgroundColor: 'lightcoral'
	},
	gridStyles: {
		width: '100%'
	},
	insideDiv: {
		textAlign: 'center',
		backgroundColor: 'grey',
		display: 'block',
		minHeight: '100%',
		fontSize: '14px'
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
		const value = event.currentTarget.value;
		const { displayedValue } = this.state;
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
				this.calculatedValue += value;
				break;
			case '+':
			case '-':
			case '*':
			case '/':
			case '%':
			case '.':
				this.calculatedValue += value
				break;
			case '=': 
				this.calculatedValue = eval(this.calculatedValue);;
				break;
			case 'AC':
				this.calculatedValue = '';
				break;
			default: break;
		}
		
		this.setState({
			displayedValue: this.calculatedValue
		});
	}
	render() {
		const { classes } = this.props;
		const { displayedValue } = this.state;
		return(
			<Fragment>
				<CssBaseline />
				<DisplayCalculator
					displayedValue = {displayedValue}
					handleClick={this.handleClick}
					classes={classes}
				/>	
			</Fragment>
			
		)
	}
}
export default  withStyles(styles)(Calculator);