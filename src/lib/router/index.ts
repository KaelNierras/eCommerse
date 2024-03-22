import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginView from '../features/authentication/views/login_view.vue';
import DashboardViewAdmin from '../features/admin_dashboard/views/dashboard_view.vue';
import DashboardViewUser from '../features/user_dashboard/views/user_view.vue';
import MenCategory from '../features/user_dashboard/views/categories/men_view.vue';
import WomenCategory from '../features/user_dashboard/views/categories/women_view.vue';
import KidsCategory from '../features/user_dashboard/views/categories/kids_view.vue';
import ProductView from '../features/user_dashboard/views/product/product_view.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: DashboardViewAdmin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardViewUser,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/men',
    name: 'men',
    component: MenCategory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/women',
    name: 'women',
    component: WomenCategory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/kids',
    name: 'kids',
    component: KidsCategory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

let isAuthReady = false;

const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!isAuthReady) {
    isAuthReady = true;
  }
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Listen for changes in the authentication state
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (requiresAuth && !user) {
      // If the route requires authentication and the user is not authenticated, redirect to login
      next('/');
    } else if (!requiresAuth && user) {
      // If the route does not require authentication and the user is authenticated, redirect to dashboard
      next('/dashboard');
    } else {
      // Allow access to the route
      next();
    }

    // Stop listening for further changes
    unsubscribe();
  });
});

export default router;