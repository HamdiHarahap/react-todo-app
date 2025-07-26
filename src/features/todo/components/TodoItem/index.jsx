import { useEffect, useState } from 'react';
import Button from '../../../../components/ui/Button';

const TodoItem = (props) => {
	const { status } = props;

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosJson = JSON.parse(localStorage.getItem('todos')) || [];
		const todos =
			status == 'active'
				? todosJson.filter((todo) => todo && todo.status == 'active')
				: todosJson.filter((todo) => todo && todo.status == 'done');
		setTodos(todos);
	}, [todos, status]);

	const handleDelete = (id) => {
		const allTodos = JSON.parse(localStorage.getItem('todos')) || [];

		const filteredTodos = allTodos.filter((todo) => todo.id !== id);
		setTodos(filteredTodos);
		localStorage.setItem('todos', JSON.stringify(filteredTodos));
	};

	const handleDoneStatus = (id) => {
		const allTodos = JSON.parse(localStorage.getItem('todos')) || [];

		const updatedTodos = allTodos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					status: todo.status === 'active' ? 'done' : 'active',
				};
			}
			return todo;
		});

		localStorage.setItem('todos', JSON.stringify(updatedTodos));

		const filteredTodos =
			status === 'active'
				? updatedTodos.filter((todo) => todo.status === 'active')
				: updatedTodos.filter((todo) => todo.status === 'done');

		setTodos(filteredTodos);
	};

	return (
		<div>
			{todos.map((todo) => {
				return (
					<div
						key={todo.id}
						className="px-3 py-2 flex justify-between items-center"
					>
						<p className="text-sm font-semibold text-zinc-800">{todo.todo}</p>
						{status == 'active' ? (
							<Button
								onClick={() => handleDoneStatus(todo.id)}
								className="bg-green-500 hover:bg-green-800 text-white font-semibold p-2 rounded-md transition-all duration-300 cursor-pointer"
							>
								<img src="/assets/done.svg" alt="" className="w-5" />
							</Button>
						) : (
							<Button
								onClick={() => handleDelete(todo.id)}
								className="bg-red-500 hover:bg-red-800 text-white font-semibold p-2 rounded-md transition-all duration-300 cursor-pointer"
							>
								<img src="/assets/trash.svg" alt="" className="w-5" />
							</Button>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default TodoItem;
