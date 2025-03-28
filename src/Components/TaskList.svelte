<!-- src/components/TaskList.svelte -->
<script>
    import { tasks } from '../stores/taskStore.js';
  
    let taskList = [
      { id: 1, description: 'Meditate for 10 minutes', completed: false },
      { id: 2, description: 'Read a chapter of a book', completed: false },
      { id: 3, description: 'Exercise for 30 minutes', completed: false }
    ];
  
    function toggleTask(id) {
      const task = taskList.find(t => t.id === id);
      task.completed = !task.completed;
      tasks.update(t => t.map(t => (t.id === id ? { ...t, completed: task.completed } : t)));
    }
  </script>
  
  <ul>
    {#each taskList as task}
      <li>
        <input type="checkbox" checked={task.completed} on:change={() => toggleTask(task.id)} />
        {task.description}
      </li>
    {/each}
  </ul>
  