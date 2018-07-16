import React, { Fragment } from 'react';
import { Button,
	GridList,
	GridListTile,
	Grid,
	Input,
	Typography
} from '@material-ui/core';


const DisplayCalculator = ({ handleClick, classes, displayedValue }) => {
	return(
		<Grid className={classes.rootStyles} container={true}>
			<GridList cols={1}  cellHeight={50} className={classes.gridStyles}>
				<GridListTile key="display">
					<Typography variant="display1" gutterBottom={true} align="center" color="primary">{displayedValue}</Typography>
				</GridListTile>
			</GridList>
			<GridList cols={3}  cellHeight={50} className={classes.gridStyles} >
				<GridListTile key="AC" style={{width: '33%'}}>
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="AC">AC</Button>
				</GridListTile>
				<GridListTile key="%">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="%">%</Button>
				</GridListTile>
				<GridListTile key="/">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="/">/</Button>
				</GridListTile>
			</GridList>
			<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
				<GridListTile key="7">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="7">7</Button>
				</GridListTile>
				<GridListTile key="8">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="8">8</Button>
				</GridListTile>
				<GridListTile key="9">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="9">9</Button>
				</GridListTile>	
				<GridListTile key="*">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="*">*</Button>
				</GridListTile>	
			</GridList>
			<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
				<GridListTile key="4">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="4">4</Button>
				</GridListTile>
				<GridListTile key="5">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="5">5</Button>
				</GridListTile>
				<GridListTile key="6">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="6">6</Button>
				</GridListTile>	
				<GridListTile key="-">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="-">-</Button>
				</GridListTile>	
			</GridList>
				<GridList cols={4}  cellHeight={50} className={classes.gridStyles} >
				<GridListTile key="1">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="1">1</Button>
				</GridListTile>
				<GridListTile key="2">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="2">2</Button>
				</GridListTile>
				<GridListTile key="3">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="3">3</Button>
				</GridListTile>	
				<GridListTile key="+">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="+">+</Button>
				</GridListTile>	
			</GridList>
			<GridList cols={3} cellHeight={50} className={classes.gridStyles} >
				<GridListTile key="0">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="0">0</Button>
				</GridListTile>
				<GridListTile key=".">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value=".">.</Button>
				</GridListTile>
				<GridListTile key="=">
					<Button fullWidth={true} variant="contained" onClick={handleClick} value="=">=</Button>
				</GridListTile>
			</GridList>
		</Grid>
	);
};

export default DisplayCalculator;