import Vue from 'vue'
import Router from 'vue-router'

import formPage from '../components/form-page'
import mainPage from '../components/main-page'
import thanksPage from '../components/thanks-page'

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'main-page',
            component: mainPage,
        },
        {
            path: '/form-page',
            name: 'form-page',
            component: formPage,
        },
        {
            path: '/thanks-page',
            name: 'thanks-page',
            component: thanksPage,
        }
    ]
})

export default router