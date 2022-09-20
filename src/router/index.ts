import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { RouterNameEnum } from "@/enums/Index";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouterNameEnum.Home,
      meta: {
        layout: "AppLayoutHome",
        requiresAuth: true,
      },
      component: HomeView,
    },
    {
      path: "/settings",
      name: RouterNameEnum.Settings,
      meta: {
        layout: "AppLayoutHome",
        requiresAuth: true,
      },
      component: HomeView,
    },
    {
      path: "/welcome",
      name: RouterNameEnum.Welcome,
      meta: {
        layout: "AppLayoutSimple",
      },
      component: () => import("../views/WelcomeView.vue"),
    },
    {
      path: "/register",
      name: RouterNameEnum.Register,
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/signin",
      name: RouterNameEnum.Login,
      component: () => import("../views/LoginView.vue"),
    },
  ],
});


export default router;
