import { questions } from './Questions';

type typePropsGame = {
	step: number;
	countCurrent: number;
	// setStep: (a: number) => number;
	// setCountCurrent: (a: number) => number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	setCountCurrent: React.Dispatch<React.SetStateAction<number>>;
};

export default function Game(props: typePropsGame) {
	const stepTitle = questions[props.step].title;
	const stepCurrent = questions[props.step].correct;
	const stepQuestions = questions[props.step].variants;
	const progressBar = (props.step / questions.length) * 100;

	// console.log(stepQuestions);
	function handleAnswerQuestion(index: number) {
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
