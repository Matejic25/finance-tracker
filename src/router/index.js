import { createWebHistory, createRouter } from 'vue-router';

const DashboardView = () => import('@/views/DashboardView.vue');
const TransactionDetailsView = () =>
    import('@/views/TransactionDetailsView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const NotFound = () => import('@/views/NotFound.vue');

const routes = [
    {
        path: '/',
        component: DashboardView,
        name: 'dashboard',
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/transactions/:id',
        component: TransactionDetailsView,
        name: 'transaction-details',
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/about',
        component: AboutView,
        name: 'about',
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
