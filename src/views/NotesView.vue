<template>
  <div class="notes">
    <CreateEditNote
      v-model="newNote"
      placeholder="Add new note"
      label="New Note"
      ref="createEditNote"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          @click="addNewNote()"
          :disabled="!newNote"
        >
          Add new note
        </button>
      </template>
    </CreateEditNote>

    <Note
      v-for="note in notes"
      :key="note?.id"
      :note="note"
      @deleteNote="deleteNote($event)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import CreateEditNote from "@/components/notes/CreateEditNote.vue";
import { useNotesStore } from "../stores/notesStore";
import { storeToRefs } from "pinia";

const createEditNote = ref(null);

const store = useNotesStore();

const { notes } = storeToRefs(store);

const newNote = ref("");

const addNewNote = () => {
  store.addNewNote(newNote.value);
  newNote.value = "";

  createEditNote.value.focus();
};

const deleteNote = (id) => {
  const objWithIdIndex = notes.value.findIndex((obj) => obj.id === id);
  notes.value.splice(objWithIdIndex, 1);
};
</script>
