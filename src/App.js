import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Screen from './components/Screen';

function App() {
	const [num, setNum] = useState('');
  const [result, setResult] = useState('');

	const addElInEnter = (newNum) => {
		setNum(newNum);
	};

  const createResult = (newResult) => {
		setResult(newResult);
	};

	return (
		<div className='App'>
			<div className='calc'>
				<Screen num={num} result={result} />

				<Buttons
					num={num}
					result={result}
					createNum={addElInEnter}
					createResult={createResult}
				/>
			</div>
		</div>
	);
}

export default App;
