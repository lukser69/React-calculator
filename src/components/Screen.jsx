import React from "react";

const Screen = ({ num, result }) => {
	return (
		<div className='screen'>
			<div className='result'>{result}</div>
			<div className='enter'>{num}</div>
		</div>
	);
};

export default Screen;