import React from 'react';

// styles
import './InputField.scss';

interface Props {
	todo?: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	onAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, onAdd }) => {
	return (
		<form className='input' onSubmit={onAdd}>
			<input type='input' value={todo} placeholder='Enter a task' className='input__box' onChange={(e) => setTodo(e.target.value)} />
			<button className='input__submit' type='submit'>
				Add
			</button>
		</form>
	);
};

export default InputField;
