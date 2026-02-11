import { useState } from 'react';

import './Quiz.scss';

import { questions } from '../Questions';
import Game from '../Game';
import Result from '../Result';

function Quiz() {
	const [step, setStep] = useState(0);
	const [countCurrent, setCountCurrent] = useState(0);

	// console.log(step);
	// console.log(questions.length);

	return (
		<div className="quiz">
			{step !== questions.length ? (
				<Game
					step={step}
					setStep={setStep}
					countCurrent={countCurrent}
					setCountCurrent={setCountCurrent}
				/>
			) : (
				<Result step={step} countCurrent={countCurrent} />
			)}
		</div>
	);
}

export default Quiz;
