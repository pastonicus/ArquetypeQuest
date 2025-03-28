<!-- src/components/ProgressIndicator.svelte -->
<script>
    import { progress } from '../stores/userStore.js';
  
    let currentProgress = 0;
  
    progress.subscribe(value => {
      currentProgress = value;
    });
  </script>
  
  <div>
    <h3>Your Progress</h3>
    <progress value={currentProgress} max="100"></progress>
  </div>
  