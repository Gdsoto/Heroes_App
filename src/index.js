import React from 'react';
import ReactDOM from 'react-dom';
import HeroesApp from './HeroesApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

ReactDOM.render(
	<React.StrictMode>
		<HeroesApp />
	</React.StrictMode>,
	document.getElementById('root')
);
