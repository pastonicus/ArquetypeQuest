// src/stores/taskStore.js
import { writable } from 'svelte/store';

export const tasks = writable([
  { id: 1, description: 'Meditate for 10 minutes', completed: false },
  { id: 2, description: 'Read a chapter of a book', completed: false },
  { id: 3, description: 'Exercise for 30 minutes', completed: false }
]);
