<template>
  <div
    class="max-w-full bg-veryLightGray dark:bg-veryDarkDesBlue mt-6 rounded-t-md"
  >
    <VueDraggableNext
      v-if="todos"
      :list="todos"
      class="dragArea list-group w-full"
    >
      <TodoItem
        class="list-group-item"
        v-for="todo in todos"
        :key="todo.id"
        :todoText="todo.body"
        :completed="todo.completed"
        @delete="deleteTodo(todo.id)"
        @complete="completeTodo(todo.id)"
      />
    </VueDraggableNext>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import { VueDraggableNext } from 'vue-draggable-next';

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
