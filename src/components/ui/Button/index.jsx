const Button = (props) => {
	const { children, className, onClick = () => {} } = props;

	return (
		<button type="submit" className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
