import React, { useState } from 'react';

// Styles
import './SingleTodo.scss';

// Icons
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

// Models
import { Todo } from '../models/Todo';

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);

	const doneHandler = (id: number) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
	};

	const deleteHandler = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editHandler = (id: number) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
		setEdit(false);
	};

	return (
		<form className='todo' onSubmit={() => editHandler(todo.id)}>
			{edit ? (
				<textarea className='todo__textarea' value={editTodo} onChange={(e) => setEditTodo(e.target.value)}></textarea>
			) : (
				<>{todo.isDone ? <s className='todo__text'>{todo.todo}</s> : <span className='todo__text'>{todo.todo}</span>}</>
			)}
			<div className='todo__icons'>
				{!edit ? (
					<>
						<span
							className='todo__icon'
							onClick={() => {
								if (!edit && !todo.isDone) {
									setEdit(true);
								}
							}}>
							<AiFillEdit />
						</span>

						<span className='todo__icon' onClick={() => deleteHandler(todo.id)}>
							<AiFillDelete />
						</span>
					</>
				) : null}
				<span className='todo__icon' onClick={() => (edit ? editHandler(todo.id) : doneHandler(todo.id))}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
