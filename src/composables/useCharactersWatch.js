import { watch } from "vue";

export const useCharactersWatch = (value, maxlength = 100) => {
  watch(value, (newValue) => {
    if (newValue.length === maxlength) {
      alert(`Only ${maxlength} characteres allowed`);
    }
  });
};
