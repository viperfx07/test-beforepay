import clsx from 'clsx'

const Button = ({
	type="button",
	children,
	className,
	style,
	onClick
}) => {
	return (
		<button
			type={type}
			className={clsx("rounded-full border-2 border-primary text-primary font-semibold py-4 px-5 hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none transition duration-300", className)}
			style={{
				minWidth: 168,
				...style
			}}
			onClick={onClick}
		>
			{
				children
			}
		</button>
	);
}

export default Button;
