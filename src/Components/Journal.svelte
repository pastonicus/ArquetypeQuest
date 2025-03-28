<!-- src/components/Journal.svelte -->
<script>
    let journalEntry = '';
  
    function saveEntry() {
      // Logic to save the journal entry
      console.log('Journal Entry Saved:', journalEntry);
    }
  </script>
  
  <div>
    <h3>Reflect on Your Journey</h3>
    <textarea bind:value={journalEntry}></textarea>
    <button on:click={saveEntry}>Save Entry</button>
  </div>
  