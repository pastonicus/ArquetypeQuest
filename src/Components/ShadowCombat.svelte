<!-- src/components/ShadowCombat.svelte -->
<script>
    let shadowHealth = 100;
  
    function dealDamage(damage) {
      shadowHealth -= damage;
      if (shadowHealth <= 0) {
        alert('Shadow Defeated!');
        shadowHealth = 100; // Reset for demo purposes
      }
    }
  </script>
  
  <div>
    <h3>Combat Shadow</h3>
    <p>Shadow Health: {shadowHealth}</p>
    <button on:click={() => dealDamage(20)}>Complete Task</button>
  </div>

