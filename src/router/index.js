import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignIn from "@/views/SignIn.vue";
import Register from "@/views/Register.vue";
import ProjectsView from "@/views/ProjectsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
