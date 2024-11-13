import { createRouter, createWebHistory } from 'vue-router';
import MyLandingPage from './components/MyLandingPage.vue';
import AboutUs from './components/AboutUs.vue';
import MyPlayers from './components/MyPlayers.vue';
import MyManagers from './components/MyManagers.vue';
import MyCoaches from './components/MyCoaches.vue';
import MyTeams from './components/MyTeams.vue';
import WardLogin from './components/WardLogin.vue';
import MunicipalityLogin from './components/MunicipalityLogin.vue';

import WardAdmin from './components/WardAdmin.vue';
import PalikaAdmin from './components/PalikaAdmin.vue';

const routes = [
  { path: '/', component: MyLandingPage },
  { path: '/about-us', component: AboutUs },
  { path: '/players', component: MyPlayers },
  { path: '/managers', component: MyManagers },
  { path: '/coaches', component: MyCoaches },
  { path: '/teams', component: MyTeams },
  { path: '/ward-login', component: WardLogin },
  { path: '/municipality-login', component: MunicipalityLogin },

  { path: '/wardadmin', component: WardAdmin }, // Add the admin route
  { path: '/palikaadmin', component: PalikaAdmin }, // Add the admin route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
