import NotesViews from "@/views/NotesView.vue";
import StatsView from "@/views/StatsView.vue";
import NoteEditView from "@/views/NoteEditView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "notes",
    component: NotesViews,
  },
  {
    path: "/edit-note/:id",
    name: "editNote",
    component: NoteEditView,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
