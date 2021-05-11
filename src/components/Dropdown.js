import React, { useState } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({  name, label, className, onChange, inputClassName, children, options, value }) => {
	const [selectedValue, setSelectedValue] = useState(value);

	const selectedOption = options.find((opt) => opt.value === selectedValue)

	return (
		<div className="relative">
			<label
				className={clsx(
					'absolute z-10 left-0 top-0 w-full h-full min-h-12',
					{ 'opacity-0': selectedValue },
					className,
				)}
			>
				<span className="sr-only">{label}</span>
				<select
					name={name}
					value={value}
					className={clsx(
						'border-b w-full h-full pb-5 focus:border-primary  cursor-pointer focus:outline-none',
						inputClassName,
					)}
					onChange={(e) => {
						setSelectedValue(e.target.value)
						onChange(e)
					}}
				>
					{options?.map((opt) => (
						<option key={opt.value + opt.label} value={opt.value}>
							{opt.label}
						</option>
					)) || children}
				</select>
			</label>
			{selectedValue && selectedOption ? (
				<div className="rounded-lg border-2 border-primary text-primary p-5 pointer-events-none">
					<div className="font-bold">{selectedOption.label}</div>
					<div>{selectedOption.desc}</div>

					<div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-xs">
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</div>
			) : null}
		</div>
	)
}

export default Dropdown
