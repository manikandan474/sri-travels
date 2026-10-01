import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './layout-overrides.css';
import './hero-motion.css';
import './admin.css';
import './social-admin.css';
import './packages.css';
import './package-contact.css';
import './package-estimator.css';
import './booking-map.css';
import './booking-info.css';
import './booked-dates.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
