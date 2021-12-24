import { useState } from 'react';
import './App.css';
import {Buttons} from './components';
import {Screen} from './components';

function App() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState('');

	return (
		<div className='App'>
			<div className='calc'>
				<Screen number={number} result={result} />
				<Buttons
					number={number}
					result={result}
					createNumber={(newNumber) => setNumber(newNumber)}
					createResult={(newResult) => setResult(newResult)}
				/>
			</div>
		</div>
	);
}

export default App;
