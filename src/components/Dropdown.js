import clsx from 'clsx'
const Dropdown = ({ label, className, onChange, inputClassName, children }) => {
	return (
		<label className={clsx('w-full', className)}>
			<span className="sr-only">{label}</span>
			<select
				className={clsx(inputClassName)}
				onChange={onChange}
			>
				{children}
			</select>
		</label>
	)
}

export default Dropdown
