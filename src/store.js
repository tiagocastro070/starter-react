const createStore = () => {

    const myApp = {
        /**
         * Languages
         */
        availableLangs: ['pt', 'en'],
        setLang(lang) {
            let tmpLang = lang || window.location.pathname.split('/')[1] || localStorage.getItem('app-lang')
            if ( !myApp.authorizedLang(tmpLang) ) {
                tmpLang = 'pt';
            }
            localStorage.setItem('app-lang', tmpLang);
            return tmpLang;
        },
        // Checks if requested lang is available
        authorizedLang(requestedLang) {
            return myApp.availableLangs.includes(requestedLang);
        },

        /**
         * Routes
         */
        routes: [],

        /**
         * Menu Tree
         */
        menus: [],

        /**
         * Translated Strings
         */
        translations: [],

        /**
         * General
         */
        title: 'React Starter Boilerplate'
    };
    
    const siteTitle = 'All rights reserved';

    const siteInfos = {
        siteTitle: 'React Starter Boilerplate'
    }

    return {
        myApp,
        siteTitle,
        siteInfos
    }
}

export default createStore;