import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Scroll to top on initial page load
window.addEventListener('load', () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant' // Instant scroll without animation
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);