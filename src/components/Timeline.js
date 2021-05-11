import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const TimelineStep = ({
	className,
	title,
	icon,
	isActive,
	isPassed,
	children
}) => {
	const defaultClassName = "rounded-full border-2 border-secondary bg-white transform -translate-x-1/2 w-9.5 h-9.5 inline-flex flex-shrink-0 justify-center items-center"

	return (
		<div className="relative my-10 text-brown flex">
			<div className={
				clsx(defaultClassName, className, {
					"scale-75": !isActive,
					"text-secondary text-3xl": isPassed
				})
			}>
				{
					!isPassed ? (<FontAwesomeIcon icon={icon} />) :
					(<FontAwesomeIcon icon={faCheckCircle} />)
				}
			</div>
			<div className="ml-7 flex-1">
				{
					title && (
						<div className={clsx("font-semibold text-xl", { 'opacity-50' : isPassed })}>
							{title}
						</div>
					)
				}
				{
					children
				}
			</div>
		</div>
	)
}

const Timeline = ({
	activeStepIndex = 0,
	steps = [],
	children,
}) => {
	return (
		<div className="relative h-full">
			<div className="relative h-full">
				<div
					className="absolute left-0 ml-16 h-full w-0.5"
					style={{ backgroundImage: 'linear-gradient(to bottom, #7cceb1 0%, #7cceb1 40%, #5720ce 99%)' }}
				></div>
				<div className="flex flex-col ml-16 pt-10 justify-between h-full">
					<div className="flex-1">
						{
							steps.map((step, index) => (
								<TimelineStep
									key={`step-${index}`}
									title={step.title}
									icon={step.icon}
									isActive={activeStepIndex === index}
									isPassed={activeStepIndex > index}
								>
									{
										step.children
									}
								</TimelineStep>
							))
						}
					</div>
					<div>
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Timeline
