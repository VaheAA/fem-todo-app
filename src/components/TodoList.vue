<template>
  <div class="max-w-full bg-veryLightGray mt-6 rounded-md px-4 py-4">
    <ul>
      <TodoItem
        v-for="todo in data"
        :key="todo.id"
        :todoText="todo.todoText"
        :completed="todo.completed"
      />
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import { provide } from 'vue';
const data = [
  {
    id: '1',
    todoText: 'Some todo',
    completed: false
  },
  {
    id: '2',
    todoText: 'Second todo',
    completed: true
  }
];

provide('count', data.length);
</script>
