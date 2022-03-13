<template>
  <div
    class="max-w-full bg-veryLightGray dark:bg-veryDarkDesBlue mt-6 rounded-t-md"
  >
    <ul v-if="todos">
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem
          :todoText="todo.body"
          :completed="todo.completed"
          @delete="handleDelete(todo.id)"
          @complete="handleComplete(todo.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TodoItem from './TodoItem.vue';
const todos = ref([]);

const handleDelete = (id) => {
  todos.value = todos.value.filter((item) => item.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};
const handleComplete = (id) => {
  todos.value = todos.value.map((item) =>
    item.id === id ? (item.completed = !item.completed) : item.completed
  );
};

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos'));
});
</script>
