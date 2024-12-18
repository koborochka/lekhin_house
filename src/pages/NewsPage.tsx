import { useEffect, useRef } from 'react';

export default function NewsPage() {
	const widgetRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const width = Math.min(window.innerWidth * 0.9, 700); 
        const height = Math.min(window.innerHeight * 0.8, 800); 

		if (widgetRef.current && window.VK && window.VK.Widgets) {
			window.VK.Widgets.Group(
				widgetRef.current.id,
				{ mode: 4, wide: 1, width, height, no_cover: 0, color1: "FFFFFF", color2: "000000", color3: "5181B8" },
				88538029
			);
		}

		return () => {
			if (widgetRef.current) {
				widgetRef.current.innerHTML = ""; 
			}
		};
	}, []);

	return (
		<div>
			<h1 className="main-title title-h1">
				Наши <span className="pink">новости</span>
			</h1>
			<div
				id="vk_news_widget"
				ref={widgetRef}
				className="wrap vk_news_widget"
				style={{ marginTop: 35, marginBottom: 125 }}
			></div>
		</div>
	);
}
