import React, { useState } from 'react';
import './App.scss';

// Reusable components
import InputField from './components/InputField';

// Models
import { Todo } from './models/Todo';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const AddHandler = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo.trim(), isDone: false }]);
			setTodo('');
		}
	};

	return (
		<>
			<header>
				<h1>Task Done</h1>
			</header>
			<main className='taskdone'>
				<InputField todo={todo} setTodo={setTodo} onAdd={AddHandler} />
			</main>
		</>
	);
};

export default App;
