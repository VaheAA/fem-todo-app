<template>
  <div
    class="max-w-full bg-veryLightGray dark:bg-veryDarkDesBlue mt-6 rounded-t-md"
    @dragenter.prevent
    @dragover.prevent
  >
    <ul v-if="todos" :todos="todos" @drop="handleDrop">
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem
          :todoText="todo.body"
          :completed="todo.completed"
          @delete="deleteTodo(todo.id)"
          @complete="completeTodo(todo.id)"
          @dragStart="startDrag($event, todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todos: Array
});

const emit = defineEmits(['handleDelete', 'handleComplete']);

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('id', item.id);
};

const deleteTodo = (id) => {
  emit('handleDelete', id);
};
const completeTodo = (id) => {
  emit('handleComplete', id);
};
</script>
