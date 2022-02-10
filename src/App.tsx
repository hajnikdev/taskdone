import React, { useState } from 'react';
import './App.scss';

// Reusable components
import InputField from './components/InputField';
import TodoList from './components/TodoList';

// Models
import { Todo } from './models/Todo';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: Date.now(),
			todo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			isDone: false,
		},
		{
			id: Date.now() + 1,
			todo: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			isDone: false,
		},
		{
			id: Date.now() + 2,
			todo: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			isDone: false,
		},
	]);

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
				<TodoList todos={todos} setTodos={setTodos} />
			</main>
		</>
	);
};

export default App;
