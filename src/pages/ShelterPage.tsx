import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

import { Keyboard, Navigation } from 'swiper/modules';

export default function ShelterPage() {
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [initialSlide, setInitialSlide] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isLightboxOpen) {
				closeLightbox()
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isLightboxOpen]);

	const galleryImages = [
		'src/assets/imgs/our-shelter__gallery-photo-1.png',
		'src/assets/imgs/our-shelter__gallery-photo-2.png',
		'src/assets/imgs/our-shelter__gallery-photo-3.png',
		'src/assets/imgs/our-shelter__gallery-photo-4.png',
		'src/assets/imgs/our-shelter__gallery-photo-5.png',
		'src/assets/imgs/our-shelter__gallery-photo-6.png',
		'src/assets/imgs/our-shelter__gallery-photo-7.png',
		'src/assets/imgs/our-shelter__gallery-photo-8.png',
	];

	const openLightbox = (index: number) => {
		setInitialSlide(index)
		setLightboxOpen(true)
	};

	const closeLightbox = () => {
		setLightboxOpen(false)
	};

	return (
		<section className="our-shelter-section wrap">
			<h2 className="our-shelter-section__title">История приюта</h2>
			<div className="our-shelter-section__container">
				<img
					className="our-shelter-section__main-photo"
					src="/src/assets/imgs/our-shelter__main-photo.png"
					alt="shelter"
					loading="lazy"
				/>
				<div className="our-shelter-section__content">
					<p>Приют «Преданное сердце» открылся в 2015 году на волонтёрских началах. Это было помещение на 87 кв. м для почти трёх десятков кошек, арендованное на личные средства.</p>
					<p>Началась всё с простого желания приютить кота. Будущий руководитель «Преданного сердца» искала кого-то пожилого или с тяжёлым заболеванием, потому что таких из приюта забирать обычно не спешат. В итоге к Наталии Авласевич переехали четыре «бесперспективные» кошки и позже — возрастная собака, а сама она стала волонтёром: приезжала раз в неделю и помогала ухаживать, кормить, лечить и искать животным дом.</p>
					<p>Организовать что-то своё в планы не входило, но обстоятельства сложились по-другому. Обстоятельства — это 28 кошек, оставленных бабушкой в обычной городской квартире. Хозяйку положили в хоспис, животным грозила улица или усыпление. Медлить было нельзя, к тому же все кошки были истощены и больны.</p>
					<p>Приют организовывали спешно. Ремонт сделали своими силами, оборудование и мебель помогли найти неравнодушные люди. Девять лет назад всё держалось на голом энтузиазме: не было финансовых ресурсов, поддержки, знаний и лишних рук, зато была любовь и нежелание бросать животных на произвол судьбы.</p>
					<p>Со временем экстренное убежище для бездомных животных превратилось в большое функциональное пространство с комфортными условиями.</p>
				</div>
			</div>
			<h2 className="our-shelter-section__title">Фотогалерея приюта</h2>
			<ul className="our-shelter-section__gallery">
				{galleryImages.map((src, index) => (
					<li
						key={index}
						className="our-shelter-section__gallery-item"
						onClick={() => openLightbox(index)}
					>
						<img src={src} alt={`gallery-photo-${index + 1}`} />
					</li>
				))}
			</ul>

			{isLightboxOpen && (
				<div className="lightbox">
					<button className="lightbox__close" onClick={closeLightbox}>
						✖
					</button>
					<Swiper
						className="lightbox__swiper"
						modules={[Navigation, Keyboard]}
						navigation
						initialSlide={initialSlide}
						spaceBetween={10}
						slidesPerView={1}
						centeredSlidesBounds
						loop
						keyboard={{
							enabled: true,
						  }}
					>
						{galleryImages.map((src, index) => (
							<SwiperSlide key={index}>
								<img src={src} alt={`lightbox-photo-${index + 1}`} className="lightbox__image" loading="lazy"/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</section>
	);
}
