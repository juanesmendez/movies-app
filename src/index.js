import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function language() {
    if (navigator.language.includes("es")) {
        return localeEsMessages;
    } else if (navigator.language.includes("en")) {
        return localeEnMessages;
    }

}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={language()}>
        <App />
    </IntlProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
