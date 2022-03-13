<template>
  <div class="bg-hero-pattern h-72 bg-cover bg-no-repeat">
    <div class="max-w-xl mx-auto px-4 pt-14">
      <TotoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>

<script setup>
import TotoHeader from './TotoHeader.vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoFooter from './TodoFooter.vue';
</script>
