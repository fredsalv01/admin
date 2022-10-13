import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  { 
    path: "/about",
    name: "about", 
    component: () => import("@/views/About.vue") 
  },
  { 
    path: "/team",
    name: "team", 
    component: () => import("@/views/Team.vue") 
  },
  { 
    path: "/contact",
    name: "contact", 
    component: () => import("@/views/Contact.vue") 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
