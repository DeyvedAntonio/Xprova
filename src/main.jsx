import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css'; // Importa o CSS
import Home from './scripts/main';

createRoot(document.getElementById('root')).render(<Home />);