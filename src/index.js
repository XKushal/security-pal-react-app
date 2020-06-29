import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './CSS/Style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import ReactDOM from 'react-dom';
import './index.css';
import './_root.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

$("input[type='email']").blur(function() {
	if ($(this).val() !== '') {
		$(this).addClass('hasValue');
	} else {
		$(this).removeClass('hasValue');
	}
});

const config = {
	api: `${process.env.REACT_APP_API}`,
	title: 'Contact Me',
	successMessage: 'Thank you for contcting me.',
	errorMessage: 'Sorry we have some problems.',
	fields: {
		email: '',
		msg: ''
	},
	fieldsConfig: [
		{
			label: 'Email',
			fieldName: 'email',
			type: 'email',
			placeholder: ' Your Email',
			isRequired: true,
			klassName: 'email-field'
		}
	]
};
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
serviceWorker.unregister();
