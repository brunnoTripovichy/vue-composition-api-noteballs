<template>
  <div class="modal is-active p-2" v-if="value">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalOverlay">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal()"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal()">Cancel</button>
        <button class="button is-danger" @click="deleteNote()">Confirm</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useVModel, onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits(["update:modelValue", "deleteNote"]);

const props = defineProps({
  modelValue: { type: Boolean, default: false },
});

const value = useVModel(props, "modelValue", emit);

const closeModal = () => {
  value.value = false;
};

const modalOverlay = ref(null);
onClickOutside(modalOverlay, () => closeModal());

const handleKeyboard = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});

const deleteNote = () => {
  emit("deleteNote");
};
</script>
