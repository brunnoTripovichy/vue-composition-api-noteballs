<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note?.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLenght }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a class="card-footer-item" @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>

    <DeleteNoteModal
      v-model="modals.deleteNote"
      @deleteNote="deleteNote(note.id)"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import DeleteNoteModal from "@/components/notes/DeleteNoteModal.vue";

const props = defineProps({
  note: Object,
});

const emit = defineEmits(["deleteNote"]);

const characterLenght = computed(() => {
  const length = props?.note?.content?.length;
  const description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

const deleteNote = (id) => {
  emit("deleteNote", id);
};

const modals = reactive({ deleteNote: false });
</script>
