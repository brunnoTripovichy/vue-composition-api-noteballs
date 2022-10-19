<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label for="textarea" class="label has-text-white" v-if="label">{{
      label
    }}</label>
    <div class="field">
      <div class="control">
        <textarea
          id="textarea"
          v-model="value"
          class="textarea"
          :placeholder="placeholder"
          v-autofocus
          maxlength="100"
          ref="textareaNote"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVModel } from "@vueuse/core";
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
  },
});

const value = useVModel(props, "modelValue", emit);

const textareaNote = ref(null);

const focus = () => {
  textareaNote.value.focus();
};

defineExpose({
  focus,
});
</script>
