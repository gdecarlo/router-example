import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  {
    path: "/profile/:id",
    component: Profile,
    meta: {
      requieresAuth: true,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  console.log(to);
  return true;
});

createApp(App).use(router).mount("#app");
