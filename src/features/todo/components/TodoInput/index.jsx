import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import { useState } from 'react';

const TodoInput = () => {
	const [todo, setTodo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const todos = JSON.parse(localStorage.getItem('todos')) || [];

		const newTodo = {
			id: Date.now(),
			todo: todo,
			status: 'active',
		};

		todos.push(newTodo);
		localStorage.setItem('todos', JSON.stringify(todos));
		setTodo('');
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="border border-zinc-800 w-fit rounded-lg"
			>
				<Input
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
				/>
				<Button className="bg-zinc-800 hover:bg-zinc-600 text-white font-semibold py-2 px-5 rounded-e-md transition-all duration-300 cursor-pointer">
					Add Todo
				</Button>
			</form>
		</>
	);
};

export default TodoInput;
