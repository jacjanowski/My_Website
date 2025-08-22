
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a link element for the devicon CSS
const deviconLink = document.createElement('link');
deviconLink.rel = 'stylesheet';
deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
document.head.appendChild(deviconLink);

// Add a link element for the Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap';
document.head.appendChild(googleFontsLink);

createRoot(document.getElementById("root")!).render(<App />);
