import { useEffect } from 'react';

export default function NewsPage() {
	useEffect(() => {
		const widgetId = "vk_news_widget";
		if (window.VK && window.VK.Widgets) {
			window.VK.Widgets.Group(
				widgetId,
				{ mode: 4, wide: 1, width: 700, height: 800, no_cover: 0, color1: "FFFFFF", color2: "000000", color3: "5181B8" },
				88538029
			);
		}

		return () => {
			const widgetContainer = document.getElementById(widgetId);
			if (widgetContainer) {
				widgetContainer.innerHTML = ""; 
			}
		};
	}, []);

	return (
		<div>
			<h1 className="main-title title-h1">
				Наши <span className="pink">новости</span>
			</h1>
			<div id="vk_news_widget" className='wrap' style={{ marginTop: 35, marginBottom: 125 }}></div>
		</div>
	);
}
