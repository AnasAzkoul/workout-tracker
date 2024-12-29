import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Create from "../views/Create.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/create", name: "Create", component: Create },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
