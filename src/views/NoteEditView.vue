<template>
  <div class="edit-note">
    <CreateEditNote
      v-model="editNote"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="createEditNote"
    >
      <template #buttons>
        <RouterLink to="/">
          <button class="button is-link is-light mr-3">Cancel</button>
        </RouterLink>
        <button
          class="button is-link"
          :class="`has-background-link`"
          @click="saveNote()"
          :disabled="!editNote"
        >
          Save note
        </button>
      </template>
    </CreateEditNote>
  </div>
</template>

<script setup>
import CreateEditNote from "@/components/notes/CreateEditNote.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNotesStore } from "../stores/notesStore";

const editNote = ref("");

const store = useNotesStore();

const route = useRoute();
const note = store.getNote(route.params.id);
editNote.value = note ? note?.content : null;

const router = useRouter();
const saveNote = () => {
  store.updateNote(route.params.id, editNote.value);
  router.push("/");
};
</script>
