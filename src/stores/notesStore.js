import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis, nostrum quasi odit blanditiis ad consequuntur porro quos commodi in hic at atque culpa doloribus eum dolores ducimus delectus laudantium?",
      },
      {
        id: 2,
        content: "Smaller note",
      },
    ],
  }),
  actions: {
    addNewNote(content) {
      const note = {
        id: new Date().getTime(),
        content: content,
      };

      this.notes.push(note);
    },
    deleteNote(id) {
      const objWithIdIndex = this.notes.findIndex((obj) => obj.id === id);
      this.notes.splice(objWithIdIndex, 1);
    },
    updateNote(id, content) {
      const note = this.notes.find((note) => note.id === Number(id));
      note.content = content;
    },
  },
  getters: {
    getNote: (state) => {
      return (id) => {
        return state.notes.find((note) => note.id === Number(id));
      };
    },
    getTotalNotesCount: (state) => {
      return state.notes.length;
    },
    getTotalCharacters: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
