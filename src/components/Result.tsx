import { questions } from './Questions';

type typePropsResult = {
	countCurrent: number;
};

export default function Result({ countCurrent }: typePropsResult) {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {countCurrent} ответа из {questions.length}
			</h2>
			<a href="/">
				<button>Попробовать снова</button>
			</a>
		</div>
	);
}
