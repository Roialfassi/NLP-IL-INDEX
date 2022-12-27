import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "[request]" */ `./views/${view}.vue`);
}
// let showBoards = "protected"
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/show-post/:id",
      name: "show-post",
      component: loadView("show-post")
    },
    {
      path: "/",
      name: "all-posts",
      component: loadView("all-posts"),
    },
    {
      path: "/code",
      name: "Code",
      component: loadView("Code"),
    },
    {
      path: "/Corpora",
      name: "Corpora",
      component: loadView("Corpora"),
    },
    {
      path: "/cpm",
      name: "cpm",
      component: loadView("cpm"),
    },
    {
      path: "/code",
      name: "Courses, presentations and meetups",
      component: loadView("cpm"),
    },
    {
      path: "/LabsAndResearchers",
      name: "LabsAndResearchers",
      component: loadView("LabsAndResearchers"),
    },
    {
      path: "/LinguisticResources",
      name: "LinguisticResources",
      component: loadView("LinguisticResources"),
    },
    {
      path: "/Papers",
      name: "Papers",
      component: loadView("Papers"),
    },
    {
      path: "/TaggingTools",
      name: "TaggingTools",
      component: loadView("TaggingTools"),
    },
  ]
})