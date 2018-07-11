import React , { Component } from 'react';
import { Button,
	ContainedButton,
	InputLabel,
	GridList,
	GridListTile
} from '@material-ui/core';

const gridStyles = {
	width: '600',
	height: '450'
}

export default class Calculator extends Component {
	render() {
		return(
			<div>
				<GridList
					cellHeight={10}
					className={gridStyles}
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
					<GridListTile key='AC'>
						<Button variant="contained" value='AC'>AC</Button>
					</GridListTile>
					<GridListTile key='AC'>
						<Button variant="contained" value='AC'>AC</Button>
					</GridListTile>
				</GridList>
				<InputLabel />
				<Button>ClickMe</Button>
			</div>
		)
	}
}
