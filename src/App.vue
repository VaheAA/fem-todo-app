<script setup>
import { onMounted } from 'vue';
import TodoContainer from './components/TodoContainer.vue';
import { loadTheme } from './helpers/theme';

onMounted(() => {
  loadTheme();
});
</script>

<template>
  <TodoContainer />
</template>
