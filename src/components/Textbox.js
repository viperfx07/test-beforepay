import clsx from 'clsx'
const Textbox = ({
	label,
	className,
	onChange,
	inputClassName,
}) => {
	return (
		<label className={clsx("w-full", className)}>
			<span className="sr-only">{label}</span>
			<input
				type="text"
				placeholder={label}
				className={clsx('border-b focus:text-brown pb-5 block w-full focus:outline-none focus:border-primary', inputClassName)}
				onChange={onChange}
			/>
		</label>
	)
}

export default Textbox;
