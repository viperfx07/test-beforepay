import clsx from 'clsx'
const Textbox = ({
	name,
	label,
	value,
	className,
	onChange,
	inputClassName,
}) => {
	return (
		<label className={clsx('w-full', className)}>
			<span className="sr-only">{label}</span>
			<input
				name={name}
				type="text"
				value={value}
				placeholder={label}
				className={clsx(
					'border-b pb-5 block w-full focus:text-brown focus:outline-none focus:border-primary',
					inputClassName,
				)}
				onChange={onChange}
			/>
		</label>
	)
}

export default Textbox;
