import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cv from "../views/Cv.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "cv",
    component: Cv,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
