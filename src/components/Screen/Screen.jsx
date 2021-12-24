import React from "react";
import classes from './screen.module.css'

export const Screen = ({ number, result }) => {
	return (
		<div className={classes.screen}>
			<div className={classes.result}>{result}</div>
			<div className={classes.enter}>{number}</div>
		</div>
	);
};