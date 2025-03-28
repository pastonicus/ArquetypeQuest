<!-- src/App.svelte -->
<script>
  import OnboardingQuiz from './components/OnboardingQuiz.svelte';
  import TaskList from './components/TaskList.svelte';
  import ProgressIndicator from './components/ProgressIndicator.svelte';
  import Journal from './components/Journal.svelte';
  import ShadowCombat from './components/ShadowCombat.svelte';
</script>

<main>
  <h1>Archetype Quest</h1>
  <OnboardingQuiz />
  <TaskList />
  <ProgressIndicator />
  <Journal />
  <ShadowCombat />
</main>
