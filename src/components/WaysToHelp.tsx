import { useNavigate } from 'react-router-dom';

export default function WaysToHelp() {
	const navigate = useNavigate();

	const handleScrollToSection = (section: string) => {
	  navigate(`/help`, { state: { section } });
	};

	return (
		<div className="ways-to-help">
			<div className="ways-to-help__donation-cards-cont">
				<div className="ways-to-help__donation-card">
					<h2 className="title-h1">Помочь финансово</h2>
					<p>Даже самое маленькое пожертвование имеет значение!</p>
					<button className="btn btn--blue" onClick={() => handleScrollToSection('financial-help')}>Сделать пожертвование</button>
				</div>
				<div className="ways-to-help__donation-card">
					<h2 className="title-h1">
						Помочь <span className="pink">другим</span> способом
					</h2>
					<p>
						Мы всегда рады любой помощи, поэтому, если вы обладаете полезными
						навыками, свободным временем и желанием помочь бездомным животным,
						то пишите нам!
					</p>
					<button className="btn btn--blue" onClick={() => handleScrollToSection('help-other-ways')}>Подробнее о видах помощи</button>
				</div>
			</div>
		</div>
	)
}
