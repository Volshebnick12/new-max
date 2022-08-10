import { createRouter, createWebHashHistory } from "vue-router";

import MainMoll from "../components/MainMoll.vue";
import CatalogMagazin from "../components/CatalogMagazin.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainMoll,
      alias: "/",
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: CatalogMagazin,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
