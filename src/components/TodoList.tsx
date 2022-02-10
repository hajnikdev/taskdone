import React from 'react';

// Reusable components
import SingleTodo from './SingleTodo';

// Models
import { Todo } from '../models/Todo';

// styles
import './TodoList.scss';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return <ul className='todos'> {todos.map((todo) => {
		return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
	})} </ul>;
};

export default TodoList;
