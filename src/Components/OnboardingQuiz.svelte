<!-- src/components/OnboardingQuiz.svelte -->
<script>
    let currentStep = 0;
    let selectedGoal = '';
    let selectedArchetype = '';
  
    const goals = [
      'Improve Physical Health',
      'Learn a New Skill',
      'Enhance Mental Wellbeing',
      'Explore the World',
      'Express Creativity',
      'Deepen Spiritual Understanding',
      'Other'
    ];
  
    const archetypes = [
      'The Warrior',
      'The Sage',
      'The Caregiver',
      'The Explorer',
      'The Creator'
    ];
  
    function nextStep() {
      if (currentStep < 2) currentStep++;
    }
  
    function prevStep() {
      if (currentStep > 0) currentStep--;
    }
  
    function selectGoal(goal) {
      selectedGoal = goal;
      nextStep();
    }
  
    function selectArchetype(archetype) {
      selectedArchetype = archetype;
      nextStep();
    }
  </script>
  
  <div>
    {#if currentStep === 0}
      <h2>Embark on Your Journey</h2>
      <p>Let's discover your path to personal growth and adventure.</p>
      <button on:click={nextStep}>Start Quiz</button>
    {:else if currentStep === 1}
      <h2>What do you want to achieve?</h2>
      <ul>
        {#each goals as goal}
          <li><button on:click={() => selectGoal(goal)}>{goal}</button></li>
        {/each}
      </ul>
    {:else if currentStep === 2}
      <h2>Choose Your Archetype</h2>
      <ul>
        {#each archetypes as archetype}
          <li><button on:click={() => selectArchetype(archetype)}>{archetype}</button></li>
        {/each}
      </ul>
    {/if}
    <button on:click={prevStep} disabled={currentStep === 0}>Back</button>
  </div>
  