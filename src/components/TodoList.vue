<template>
  <div
    class="max-w-full bg-veryLightGray dark:bg-veryDarkDesBlue mt-6 rounded-t-md"
  >
    <ul v-if="todos" :todos="todos">
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem
          :todoText="todo.body"
          :completed="todo.completed"
          @delete="deleteTodo(todo.id)"
          @complete="completeTodo(todo.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref, inject } from 'vue';
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todos: Array
});

const emit = defineEmits(['handleDelete', 'handleComplete']);

const deleteTodo = (id) => {
  emit('handleDelete', id);
};
const completeTodo = (id) => {
  emit('handleComplete', id);
};
</script>
