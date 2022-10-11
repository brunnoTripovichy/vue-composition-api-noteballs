<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="textareaNote"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            @click="addNewNote()"
            :disabled="!newNote"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>

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

const textareaNote = ref(null);

const notes = ref([
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis, nostrum quasi odit blanditiis ad consequuntur porro quos commodi in hic at atque culpa doloribus eum dolores ducimus delectus laudantium?",
  },
  {
    id: 2,
    content: "Smaller note",
  },
]);

const newNote = ref("");

const addNewNote = () => {
  const note = {
    id: new Date().getTime(),
    content: newNote.value,
  };

  notes.value.push(note);
  newNote.value = "";

  textareaNote.value.focus();
};

const deleteNote = (id) => {
  const objWithIdIndex = notes.value.findIndex((obj) => obj.id === id);
  notes.value.splice(objWithIdIndex, 1);
};
</script>
