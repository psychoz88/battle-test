import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

// ENTRY POINT FOR REACT APP WITH REDUX STORE PROVIDER
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(<App />);
