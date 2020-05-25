import Vue from 'vue';
import VueRouter from 'vue-router';
import MyRecipes from '../views/MyRecipes.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/addrecipe',
        name: 'Add Recipe',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AddRecipe.vue')
    },
    {
        path: '/my-recipes',
        name: 'Recipes',
        component: MyRecipes
    },
    {
        path: '/favorite-recipes',
        name: 'Favorites',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/FavoriteRecipes.vue'
            )
    },
    {
        path: '/shuffle-recipe',
        name: 'Shuffle recipe',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/ShuffleRecipes.vue')
    },
    {
        path: '/information',
        name: 'Information',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Info.vue')
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
