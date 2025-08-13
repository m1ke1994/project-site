import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/Solutions.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/Documentation.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contacts.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicy.vue'),
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('../views/TermsOfUse.vue'),
    },
    {
      path: '/products/mesh-wifi',
      name: 'mesh-wifi',
      component: () => import('../views/products/MeshWifi.vue'),
    },
    {
      path: '/products/industrial-switch',
      name: 'industrial-switch',
      component: () => import('../views/products/IndustrialSwitch.vue'),
    },
    {
      path: '/products/smart-intercom',
      name: 'smart-intercom',
      component: () => import('../views/products/SmartIntercom.vue'),
    },
    {
      path: '/products/aspen-os',
      name: 'aspen-os',
      component: () => import('../views/products/AspenOS.vue'),
    },
    {
      path: '/products/ares-monitoring',
      name: 'ares-monitoring',
      component: () => import('../views/products/AresMonitoring.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;