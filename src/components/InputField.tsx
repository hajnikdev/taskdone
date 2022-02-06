import React from 'react';

// styles
import './InputField.scss';
const InputField = () => {
	return (
		<form className='input'>
			<input type='input' placeholder='Enter a task' className='input__box' />
			<button className='input__submit' type='submit'>
				Add
			</button>
		</form>
	);
};

export default InputField;
