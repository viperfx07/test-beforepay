import React, { useState } from 'react'
import { faBriefcase, faBriefcaseMedical, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import * as api from './api';
import logo from './logo.png'
import Button from './components/Button'
import Timeline, { TimelineStep } from './components/Timeline'
import Textbox from './components/Textbox'
import Dropdown from './components/Dropdown'


function App() {
	const [activeStepIndex, setActiveStepIndex] = useState(1)
	const [formData, setFormData] = useState({
		employmentStatus: '',
		bankConnection: '',
		idCheck: '',
	})


	const submitData = async () => {
		try {
			api.submitData(formData)
			alert('submission ok')
		} catch (e) {
			alert('error')
		}
	}

	const handleInputChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[`${e.target.name}`]: e.target.value,
		}))
	}

	const childSteps = [
		{
			name: 'bankConnection',
			label: 'Bank connection',
			icon: faBriefcase,
		},
		{
			name: 'idCheck',
			label: 'ID check',
			icon: faBriefcase,
		},
	]

	const employmentStatusDropdownOptions = [
		{
			value: '',
			label: 'Employment status',
			desc: null,
		},
		{
			value: 'fulltime',
			label: 'Full Time',
			desc: 'You work more than 38 hours per week',
		},
		{
			value: 'parttime',
			label: 'Part time',
			desc: 'You work less than 38 hours per week',
		},
	]

	const steps = [
		{
			title: 'Sign up',
			icon: faUserPlus,
		},
		{
			title: 'Employment Details',
			icon: faBriefcaseMedical,
			children: (
				<div className="mt-10">
					<Dropdown
						className="block mt-"
						name="employmentStatus"
						label="Employment Status"
						onChange={handleInputChange}
						options={employmentStatusDropdownOptions}
					/>
					{formData.employmentStatus && (
						<Button
							className="mt-12"
							onClick={() => {
								submitData()
							}}
						>
							Next
						</Button>
					)}
				</div>
			),
		},
	]

	return (
		<div className="flex min-h-screen">
			<div className="flex-auto w-1/3 bg-primary text-white text-right px-16 py-25">
				<div className="max-w-60 ml-auto">
					<img src={logo} alt="Logo" className="inline-block mb-21" />
					<div className="italic space-y-8">
						<p>Enter your employment details.</p>
						<p>Please ensure these details are correct because we'll use these to set up your account</p>
					</div>
				</div>
			</div>
			<div className="flex-auto w-2/3 pr-30">
				<Timeline steps={steps} activeStepIndex={activeStepIndex}>
					{childSteps.map(childStep => (
						<TimelineStep
							key={childStep.name}
							icon={childStep.icon}
						>
							<Textbox
								name={childStep.name}
								value={formData[childStep.name]}
								label={childStep.label}
								onChange={handleInputChange}
							></Textbox>
						</TimelineStep>
					))}
				</Timeline>
			</div>
		</div>
	)
}

export default App;
