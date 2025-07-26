import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

const TodoGroup = () => {
	const [doneTodos, setDoneTodos] = useState([]);
	const [showTodos, setShowTodos] = useState(false);

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos')) || [];
		const filteredTodos = todos.filter((todo) => todo.status == 'done');
		setDoneTodos(filteredTodos);
	}, [doneTodos]);

	const handleShowDoneTodos = (e) => {
		e.preventDefault();
		setShowTodos(!showTodos);
	};

	return (
		<div className="flex flex-col gap-5 rounded-md p-4 bg-white shadow-md w-fit">
			<h1 className="text-2xl font-semibold">To-Do List</h1>
			<TodoInput />
			<TodoItem status="active" />
			{doneTodos.length > 0 ? (
				<div className="flex flex-col gap-3">
					<h2
						className="text-sm font-semibold flex items-center gap-2 mx-auto cursor-pointer"
						onClick={handleShowDoneTodos}
					>
						Completed To-Do{' '}
						<img
							src="/assets/darrow.svg"
							alt=""
							className={`w-5 ${showTodos ? 'rotate-180' : ''} transition `}
						/>
					</h2>
					<div className={showTodos ? '' : 'hidden'}>
						<TodoItem status="done" />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default TodoGroup;
