<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ store.getTotalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (all notes)</td>
          <td>{{ store.getTotalCharacters }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useNotesStore } from "../stores/notesStore";

const store = useNotesStore();
</script>
