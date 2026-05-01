import { useState } from 'react';

import './Quiz.scss';

import { questions } from '../Questions';
import Game from '../Game';
import Result from '../Result';

function Quiz() {
	const [step, setStep] = useState<number>(0);
	const [countCurrent, setCountCurrent] = useState<number>(0);

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
				<Result countCurrent={countCurrent} />
			)}
		</div>
	);
}

export default Quiz;
