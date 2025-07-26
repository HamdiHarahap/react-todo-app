const Input = (props) => {
	const { value, onChange } = props;

	return (
		<input
			required
			value={value}
			type="text"
			className="px-3 py-2 rounded-md outline-none"
			placeholder="new todo..."
			name="todo-input"
			id="todo-input"
			onChange={onChange}
		/>
	);
};

export default Input;
