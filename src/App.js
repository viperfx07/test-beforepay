import React, { useState } from 'react'
import { faBriefcase, faBriefcaseMedical, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import logo from './logo.png'
import Button from './components/Button'
import Timeline, { TimelineStep } from './components/Timeline'
import Textbox from './components/Textbox'
import Dropdown from './components/Dropdown'


function App() {
	const [activeStepIndex, setActiveStepIndex] = useState(0)
	const [formData, setFormData] = useState({
		employmentDetails: '',
	})


	const submitEmploymentDetails = async () => {
		try {
			await axios.post('http://httpbin.org/post', formData)
			alert('submission ok')
		} catch (e) {
			alert('error')
		}
	}

	const steps = [
		{
			title: 'Sign up',
			icon: faUserPlus,
		},
		{
			title: 'Employment Details',
			icon: faBriefcaseMedical,
			children: (
				<>
					<Dropdown
						className="block"
						name="employment status"
						label="Employment Status"
						onChange={(e) => {
							setFormData(prevState => ({
								...prevState,
								employmentDetails: e.target.value,
							}))
						}}
					>
						<option value="">Choose</option>
						<option value="Full time">Full-time</option>
						<option value="Part time">Part-time</option>
					</Dropdown>
					{
						formData.employmentDetails && (
							<Button
								className="mt-12"
								onClick={() => {
								setActiveStepIndex(activeStepIndex + 1);
								submitEmploymentDetails()
							}}>
								Next
							</Button>
						)
					}
				</>
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
				<Timeline
					steps={steps}
					activeStepIndex={activeStepIndex}
				>
					<TimelineStep icon={faBriefcase}>
						<Textbox label="Bank connection"></Textbox>
					</TimelineStep>
					<TimelineStep icon={faBriefcase}>
						<Textbox label="ID check"></Textbox>
					</TimelineStep>
				</Timeline>
			</div>
		</div>
	)
}

export default App;
