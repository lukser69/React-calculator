import React from 'react';

const Buttons = ({ num, result, createNum, createResult }) => {
	const getEl = (event) => {
		const searchEqual = result.indexOf('=');
		console.log(event.target.innerText);
		switch (event.target.innerText) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				createNum(num + event.target.innerText);
				if (num === '0') createNum(event.target.innerText);
				break;
			case '+':
			case '–':
			case '×':
			case '÷':
				if (!num && !result && event.target.innerText !== '–') {
					break;
				} else if (!num && !result && event.target.innerText === '–') {
					createNum('–');
					break;
				}
				if (num) {
					createResult(num + ' ' + event.target.innerText);
					createNum('');
				} else {
					createResult(
						result.slice(0, result.length - 1) + event.target.innerText
					);
				}
				break;
			case '⟸':
				createNum(num.slice(0, num.length - 1));
				break;
			case 'CE':
				createNum('');
				break;
			case 'C':
				createNum('');
				createResult('');
				break;
			case '1/X':
				if (!result && searchEqual === -1) {
					createNum(rounding(1 / funcEqual(num, result)));
				} else {
					createResult('');
					createNum(rounding(1 / funcEqual(num, '')));
				}
				break;
			case 'X2':
				if (!result && searchEqual === -1) {
					createNum(rounding(Math.pow(funcEqual(num, result), 2)));
				} else {
					createResult('');
					createNum(rounding(Math.pow(funcEqual(num, ''), 2)));
				}
				break;
			case '√X':
				if (!result && searchEqual === -1) {
					createNum(rounding(Math.sqrt(funcEqual(num, result))));
				} else {
					createResult('');
					createNum(rounding(Math.sqrt(funcEqual(num, ''))));
				}
				break;
			case '=':
				if (searchEqual === -1) {
					createResult(result + ' ' + num + ' =');
					createNum(funcEqual(num, result));
				}
				break;
			case '.':
				createNum(funcDecimalPoint(num, result));
				break;
			case '+/-':
				if (+num !== 0) {
					createNum(-num);
				}
				break;
			case '%':
				if (num) {
					createNum(0);
					createResult('');
				}
				break;
			default:
				console.log('Error');
		}
	};

	return (
		<div className='button'>
			<button onClick={getEl} className='btn sign'>
				%
			</button>
			<button onClick={getEl} className='btn enterClear'>
				CE
			</button>
			<button onClick={getEl} className='btn allClear'>
				C
			</button>
			<button onClick={getEl} className='btn backspace'>
				⟸
			</button>
			<button onClick={getEl} className='btn fraction'>
				1/X
			</button>
			<button onClick={getEl} className='btn degree'>
				X<sup>2</sup>
			</button>
			<button onClick={getEl} className='btn sqrt'>
				√X
			</button>
			<button onClick={getEl} className='btn sign' data-sign='/'>
				÷
			</button>
			<button onClick={getEl} className='btn num'>
				7
			</button>
			<button onClick={getEl} className='btn num'>
				8
			</button>
			<button onClick={getEl} className='btn num'>
				9
			</button>
			<button onClick={getEl} className='btn sign' data-sign='*'>
				×
			</button>
			<button onClick={getEl} className='btn num'>
				4
			</button>
			<button onClick={getEl} className='btn num'>
				5
			</button>
			<button onClick={getEl} className='btn num'>
				6
			</button>
			<button onClick={getEl} className='btn sign' data-sign='-'>
				–
			</button>
			<button onClick={getEl} className='btn num'>
				1
			</button>
			<button onClick={getEl} className='btn num'>
				2
			</button>
			<button onClick={getEl} className='btn num'>
				3
			</button>
			<button onClick={getEl} className='btn sign' data-sign='+'>
				+
			</button>
			<button onClick={getEl} className='btn swapSign'>
				+/-
			</button>
			<button onClick={getEl} className='btn num'>
				0
			</button>
			<button onClick={getEl} className='btn decimalPoint'>
				.
			</button>
			<button onClick={getEl} className='btn equal'>
				=
			</button>
		</div>
	);
};

export default Buttons;

function funcEqual(num, result) {
	let newResult = result.replace(/×/, '*');
	newResult = newResult.replace(/÷/, '/');
	newResult = newResult.replace(/–/, '-');
	let equal = eval(newResult + num);
	equal = rounding(equal);
	return equal;
}

function rounding(number) {
	const fractionalPart = number - Math.trunc(number);
	if (fractionalPart.toString().length > 9) number = `${number.toFixed(7)}`;
	return number;
}

function funcDecimalPoint(num, result) {
	if (num !== '') {
		const searchEqual = result.indexOf('=');
		const splitEnterText = num.split('.');

		if (searchEqual !== -1) result = '';

		if (splitEnterText.length === 1) {
			num += '.';
		}
	} else {
		num += '0.';
	}
	return num;
}
