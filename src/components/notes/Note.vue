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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="deleteNote(note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

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
</script>
