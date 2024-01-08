import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CartPage from '../views/CartPage.vue'
import ContactPage from '../views/ContactPage.vue'
// import FavoritePage from '../views/FavoritePage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import AboutPage from '../views/AboutPage.vue'
import TakecarePage from '../views/TakecarePage.vue'
import SigninPage from '../views/SigninPage.vue'
// import SignupPage from '../views/SignupPage.vue'
// import PayPage from '../views/PayPage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
      
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/takecare',
            name: 'takecare',
            component: TakecarePage
        },
        {
            path: '/signin',
            name: 'signin',
            component: SigninPage
        },
        // {
        //     path: '/signup',
        //     name: 'signup',
        //     component: SignupPage
        // }

       
    ]
})

export default router