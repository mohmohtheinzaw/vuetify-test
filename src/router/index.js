import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Recent.vue";
import Nearby from "../views/Nearby.vue";
import Favourite from "../views/Favourite.vue";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: function (to, from, next) {
      let lastToken = localStorage.getItem("token")
      if (lastToken) {
        next();
      } else {
        next("/login")
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/nearby",
    name: "Nearby",
    component: Nearby,
    beforeEnter: function(to, from, next){
      let lastToken =localStorage.getItem("token");
      if(lastToken){
        next();
      }else{
        next("/login");
      }
    }

  },
  {
    path: "/favourite",
    name: "Favourite",
    component: Favourite,
    beforeEnter: function(to, from, next) {
      let lastToken = localStorage.getItem("token");
      if(lastToken){
        next();
      }else{
        next("/login");
      }
    }
  },
  {
    path: "/http*",
    beforeEnter: function (to) {
      window.open(to.fullPath.substring(1), "_blank");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
