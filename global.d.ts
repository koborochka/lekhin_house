interface Window {
	VK: {
		init: (config: { apiId: string; onlyWidgets: boolean }) => void;
		Widgets: {
			Group: (
				containerId: string,
				options: {
					mode: number;
					wide: number;
					height: number;
					width: number;
					no_cover: 0 | 1;
					color1: string;
					color2: string;
					color3: string;
				},
				groupId: number
			) => void;
		};
	};
}
