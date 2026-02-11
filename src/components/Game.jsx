import { questions } from './Questions';

export default function Game(props) {
	const stepTitle = questions[props.step].title;
	const stepCurrent = questions[props.step].correct;
	const stepQuestions = questions[props.step].variants;
	const progressBar = (props.step / questions.length) * 100;

	// console.log(stepQuestions);
	function handleAnswerQuestion(index) {
		if (stepCurrent === index) {
			props.setCountCurrent(props.countCurrent + 1);
		}

		props.setStep(props.step + 1);
	}

	console.log(props.countCurrent);
	console.log(progressBar);

	return (
		<>
			<div className="progress">
				<div style={{ width: progressBar + '%' }} className="progress__inner"></div>
			</div>

			<h1>{stepTitle}</h1>

			<ul>
				{stepQuestions.map((question, index) => {
					return (
						<li key={question} onClick={() => handleAnswerQuestion(index)}>
							{question}
						</li>
					);
				})}
			</ul>
		</>
	);
}
