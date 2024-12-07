import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { VK_CONFIG } from './configs/vkConfig.ts';


if (window.VK) {
	try{
		window.VK.init(VK_CONFIG);
	}
	catch(error){
        console.error('Failed to init VK API', error);
    }
} 

createRoot(document.getElementById('root')!).render(
	<App />
)

