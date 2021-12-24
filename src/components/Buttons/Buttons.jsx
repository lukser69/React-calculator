import React from 'react';
import classes from './buttons.module.css'

export const Buttons = ({ number, result, createNumber, createResult }) => {
	const searchEqual = result.indexOf('=');
	const greyButton = [classes.button, classes.greyButton].join(' ');
	const blackButton = [[classes.button, classes.blackButton].join(' ')];

	const buttons = [
		{
			value: '%',
			className: greyButton,
			onClick: () => createNumber('0'),
		},
		{
			value: 'CE',
			className: greyButton,
			onClick: () => createNumber(''),
		},
		{
			value: 'C',
			className: greyButton,
			onClick: () => {
				createNumber('');
				createResult('');
			},
		},
		{
			className: greyButton,
			value: '⟸',
			onClick: () => createNumber(number.slice(0, number.length - 1)),
		},
		{
			value: '1/X',
			className: greyButton,
			onClick: () => {
				if (!result && searchEqual === -1) {
					createNumber(rounding(1 / equal(number, result)));
				} else {
					createResult('');
					createNumber(rounding(1 / equal(number, '')));
				}
			},
		},
		{
			value: 'X^2',
			className: greyButton,
			onClick: () => {
				if (!result && searchEqual === -1) {
					createNumber(rounding(Math.pow(equal(number, result), 2)));
				} else {
					createResult('');
					createNumber(rounding(Math.pow(equal(number, ''), 2)));
				}
			},
		},
		{
			value: '√X',
			className: greyButton,
			onClick: () => {
				if (!result && searchEqual === -1) {
					createNumber(rounding(Math.sqrt(equal(number, result))));
				} else {
					createResult('');
					createNumber(rounding(Math.sqrt(equal(number, ''))));
				}
			},
		},
		{
			value: '÷',
			className: greyButton,
			onClick: () => setSign('÷'),
		},
		{
			value: '7',
			className: blackButton,
			onClick: () => setNumber('7'),
		},
		{
			value: '8',
			className: blackButton,
			onClick: () => setNumber('8'),
		},
		{
			value: '9',
			className: blackButton,
			onClick: () => setNumber('9'),
		},
		{
			value: '×',
			className: greyButton,
			onClick: () => setSign('×'),
		},
		{
			value: '4',
			className: blackButton,
			onClick: () => setNumber('4'),
		},
		{
			value: '5',
			className: blackButton,
			onClick: () => setNumber('5'),
		},
		{
			value: '6',
			className: blackButton,
			onClick: () => setNumber('6'),
		},
		{
			value: '–',
			className: greyButton,
			onClick: () => setSign('–'),
		},
		{
			value: '1',
			className: blackButton,
			onClick: () => setNumber('1'),
		},
		{
			value: '2',
			className: blackButton,
			onClick: () => setNumber('2'),
		},
		{
			value: '3',
			className: blackButton,
			onClick: () => setNumber('3'),
		},
		{
			value: '+',
			className: greyButton,
			onClick: () => setSign('+'),
		},
		{
			value: '+/-',
			className: blackButton,
			onClick: () => createNumber(-number),
		},
		{
			value: '0',
			className: blackButton,
			onClick: () => setNumber('0'),
		},
		{
			value: '.',
			className: blackButton,
			onClick: () => createNumber(decimalPoint(number)),
		},
		{
			value: '=',
			className: [classes.button, classes.equalButton].join(' '),
			onClick: () => {
				if (searchEqual === -1) {
					createResult(result + ' ' + number + ' =');
					createNumber(equal());
				}
			},
		},
	];

	function setNumber(value) {
		createNumber(number + value);
		if (number === '0') createNumber(value);
	}

	function setSign(value) {
		if (!number && !result && value !== '–') {
			return
		} else if (!number && !result && value === '–') {
			createNumber('–');
			return
		}
		if (number && number !== '–') {
			createResult(number + ' ' + value);
			createNumber('');
		} else if (!number && number !== '–') {
			createResult(result.slice(0, result.length - 1) + value);
		}
	}

	function equal() {
		let newResult = result.replace(/×/, '*');
		newResult = newResult.replace(/÷/, '/');
		newResult = newResult.replace(/–/, '-');
		let sum = eval(newResult + number);
		sum = rounding(sum);
		return sum;
	}

	function rounding(number) {
		return Number(number.toFixed(7));
	}

	function decimalPoint(number) {
		if (number) {
			if (number.indexOf('.') === -1) {
				number += '.';
			}
			return number;
		}
		return '0.';
	}
	
	return (
		<div className={classes.buttons}>
			{buttons.map(({ value, className, onClick }) => (
				<button className={className} onClick={onClick} key={value}>
					{value}
				</button>
			))}
		</div>
	);
};
