import React from 'react';

export default function HelpPage() {
	return (
		<section className="donation-section container">
			<div className="ways-to-help">
				<div className="ways-to-help__donation-cards-cont">
					<div className="ways-to-help__donation-card">
						<h2 className="title-h1">Помочь финансово</h2>
						<p>Даже самое маленькое пожертвование имеет значение!</p>
						<button className="btn btn--blue">Сделать пожертвование</button>
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
						<button className="btn btn--blue">Подробнее о видах помощи</button>
					</div>
				</div>
			</div>

			<div className="financial-help">
				<img
					alt="собака"
					className="financial-help__img financial-help__img--dog"
					src="src/assets/imgs/hero-bg--dog.png"
					loading="lazy"
				/>

				<div className="financial-help__content wrap">
					<h2>Помочь финансово</h2>
					<div className="financial-help__bank-details">
						<div className="financial-help__box">
							<h3>Перевод по номеру телефона</h3>
							<ul className="financial-help__requisite">
								<li>
									<strong>Номер телефона</strong> +7 (982) 485-15-36
								</li>
								<li>
									<strong>Получатель</strong> Воронина Н.П
								</li>
								<li>
									<strong>Банк получателя</strong> Сбер
								</li>
							</ul>
						</div>
						<div className="financial-help__box">
							<h3>Реквизиты расчетного счета</h3>
							<ul className="financial-help__requisite">
								<li>
									<strong>ИНН</strong> 6324100990
								</li>
								<li>
									<strong>КПП</strong> 632401001
								</li>
								<li>
									<strong>ОГРН</strong> 1196313037580
								</li>
								<li>
									<strong>Р/с</strong> 40703810954400002596
								</li>
								<li>
									<strong>БИК</strong> 043601607
								</li>
								<li>
									<strong>К/с</strong> 30101810200000000607
								</li>
							</ul>
						</div>
					</div>
					<p className="financial-help__note">
						При перечислении пожертвования на р/с пожалуйста пишите в назначении
						платежа "Пожертвование на уставные цели фонда".<br />
						Пожалуйста, сверяйте реквизиты перед отправкой денежных средств с
						теми, что указаны на нашем сайте, во избежание ошибок.
					</p>
					<button className="financial-help__donate-button">
						Мы искренне признательны Вам за помощь!
					</button>
				</div>
				<img
					className="financial-help__img financial-help__img--cat"
					src="src/assets/imgs/hero-bg--cat.png"
					alt="кошка"
					loading="lazy"
				/>
			</div>

			<div className="help-other-ways wrap">
				<ul className="help-other-ways__list">
					<li>
						<div className="help-other-ways__picture help-other-ways__picture--blue"></div>
						<div>
							<h2>Помочь физически</h2>
							<div className="help-other-ways__content">
								<p>
									Территория приюта требует постоянного присмотра и ухода.
								</p>
								<p>
									Среди ежедневных задач — заменить воду и раздать корм
									подопечным. Вольеры нуждаются в постоянной уборке, иногда в
									ремонте и покраске. На помощь для постройки новых вольеров мы
									дополнительно приглашаем на помощь волонтеров через соцсети.
									Саму территорию также надо убирать, а еще стричь газон на
									площадке для выгула.
								</p>
								<p>
									Вы можете прийти и помочь разово, а можете стать постоянным
									волонтером.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="help-other-ways__picture help-other-ways__picture--pink"></div>
						<div>
							<h2>Стать автоволонтёром</h2>
							<div className="help-other-ways__content">
								<p>
									Если у Вас есть машина, водительские права и желание помогать
									приюту услугами перевозки, Вы можете стать автоволонтером.
								</p>
								<p>
									Например нам часто не хватает рук и мы были бы рады помощи в
									перевозке наших подопечных в ветклинику и обратно. Также
									бывает, что мы мы находим человека, который готов взять себе
									нашего питомца, но он в другом городе — в этом случае нам тоже
									необходима помощь автоволонтеров.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="help-other-ways__picture help-other-ways__picture--yellow"></div>
						<div>
							<h2>Сделать подарок</h2>
							<div className="help-other-ways__content">
								<p>
									Наш приют существует исключительно на частные
									благотворительные пожертвования. Работа приюта не
									финансируется государством. Все ресурсы используются сегодня и
									сейчас. Помимо этого приюту всегда нужны: корм, лекарства,
									хозяйственные товары в большом количестве, всякие нужности для
									организации работы приюта и сотрудников.
								</p>
								<p>
									Например, вы можете самостоятельно приобрести корм для
									приюта. Для этого согласуйте покупку с администратором — какой
									корм и в каком количестве необходим. Также уточните, в какое
									время Вы готовы привезти корм.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div className="shelter-needs">
				<div className="wrap">
					<h2>Что всегда нужно приюту</h2>
					<ul className="shelter-needs__list">
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/diapers.png"
								alt="Пеленки"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Пеленки</h3>
								<p>Впитывающие пеленки 60-90 см</p>
								<p>
									Можно найти на Ozon и других маркетплейсах. Цена за 30 штук
									варьируется от 500 до 800 рублей.
								</p>
							</div>
						</li>
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/bowls.png"
								alt="Одноразовые миски"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Одноразовые миски</h3>
								<p>Предпочтительные глубокие</p>
							</div>
						</li>
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/pills.png"
								alt="Средства для обработки животных"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Средства для обработки животных</h3>
								<p>
									Средства для обработки животных от паразитов: Каниквантел,
									Селафорт, Фебтал, Мильбемакс, Инспектор
								</p>
							</div>
						</li>
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/syringes.png"
								alt="Шприцы"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Шприцы</h3>
								<p>Шприцы 2мл, 5мл, 10мл, 20 мл, 1мл, инсулиновые</p>
							</div>
						</li>
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/toys.png"
								alt="Игрушки для животных"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Игрушки для животных</h3>
								<p>Игрушки для кошек (шарики, мышки, дразнилки)</p>
								<p>Игрушки для собак (мячики, мягкие игрушки, жевалки)</p>
							</div>
						</li>
						<li className="shelter-needs__card">
							<img
								src="src/assets/imgs/gloves.png"
								alt="Перчатки нитриловые"
								loading="lazy"
							/>
							<div className="shelter-needs__card-content">
								<h3>Перчатки нитриловые</h3>
								<p>Перчатки нитриловые S, M, L</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}