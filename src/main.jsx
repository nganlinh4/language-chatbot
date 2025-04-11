import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import './theme.css'
import './slider-fix.css' // Additional fixes for the slider
import App from './App'
import { initMobileViewportFix, initAndroidInputFix, initIOSScrollFix } from './utils/mobileViewportFix'
import { registerServiceWorker } from './utils/serviceWorkerRegistration'

// Initialize mobile viewport fixes
initMobileViewportFix();

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAndroidInputFix();
  initIOSScrollFix();
});

// Register service worker for PWA support
registerServiceWorker();

// Create a custom event to notify the app when it's installed as PWA
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Store the event so it can be triggered later
  window.deferredPrompt = e;
});

// Detect if the app is in standalone mode (installed as PWA)
const isInStandaloneMode = () => (
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone ||
  document.referrer.includes('android-app://')
);

// Set a flag in localStorage to indicate PWA mode
if (isInStandaloneMode()) {
  localStorage.setItem('isPWA', 'true');
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
