<template>
  <div
    class="bg-hero-pattern-light dark:bg-hero-pattern-dark h-72 bg-cover bg-no-repeat"
  >
    <div class="max-w-xl mx-auto px-3 md:px-4 pt-14">
      <TotoHeader />
      <TodoInput
        @add-todo="handleSubmit"
        v-model="todoInput"
        :completed="completed"
        @complete="markAsCompleted"
      />
      <TodoList
        :todos="filterTodos"
        @handleDrop="onDrop($event, l)"
        @handleDelete="handleDelete"
        @handleComplete="handleComplete"
      />
      <TodoFooter
        :active="active"
        :count="filterTodos ? filterTodos.length : '0'"
        @change-filter="changeStatus"
        @clean-completed="cleanCompleted"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue';
import TotoHeader from './TotoHeader.vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoFooter from './TodoFooter.vue';
import { useTodo } from '../composables/useTodo';
import { getTodos } from '../composables/getTodos';

const todoInput = ref('');
const completed = ref(false);
const filter = ref('');
const active = ref('');

const todos = ref(JSON.parse(localStorage.getItem('todos')));

const { submitTodo, deleteTodo, completeTodo, deleteCompleted, updateTodos } =
  useTodo();

const filterTodos = computed(() => {
  switch (filter.value) {
    case 'all':
      return todos.value;
    case 'active':
      return todos.value.filter((todo) => todo.completed === false);
    case 'completed':
      return todos.value.filter((todo) => todo.completed !== false);
    default:
      return todos.value;
  }
});

const handleSubmit = () => {
  if (todoInput.value !== '') {
    const newTodo = {
      id: Math.trunc(Math.random() * 1234976512378),
      body: todoInput.value,
      completed: completed.value
    };
    submitTodo(todos, newTodo);
  } else {
    alert('Please, enter the todo text before submitting');
  }
  todoInput.value = '';
  completed.value = false;
};

const markAsCompleted = () => {
  completed.value = !completed.value;
};

const handleDelete = (id) => {
  deleteTodo(todos, id);
};
const handleComplete = (id) => {
  completeTodo(todos, id);
};

const changeStatus = (status) => {
  filter.value = status;
  active.value = status;
};

const cleanCompleted = () => {
  deleteCompleted(todos);
};

onMounted(() => {
  getTodos(todos, active, filter);
});

onUpdated(() => {
  updateTodos(todos);
});
</script>
