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
        @handleDelete="handleDelete"
        @handleComplete="handleComplete"
      />
      <TodoFooter
        :active="active"
        :count="filterTodos.length"
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

const todoInput = ref('');
const completed = ref(false);
const filter = ref('');
const active = ref('');

const todos = ref(JSON.parse(localStorage.getItem('todos')));

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
    if (localStorage.getItem('todos')) {
      todos.value = [...todos.value, newTodo];
      localStorage.setItem('todos', JSON.stringify(todos.value));
    } else {
      localStorage.setItem('todos', JSON.stringify([newTodo]));
    }
    todos.value = JSON.parse(localStorage.getItem('todos'));
  }
  todoInput.value = '';
  completed.value = false;
};

const markAsCompleted = () => {
  completed.value = !completed.value;
};

const handleDelete = (id) => {
  todos.value = todos.value.filter((item) => item.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};
const handleComplete = (id) => {
  todos.value.map((item) =>
    item.id === id ? (item.completed = !item.completed) : item.completed
  );
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

const changeStatus = (status) => {
  filter.value = status;
  active.value = status;
};

const cleanCompleted = () => {
  todos.value = todos.value.filter((todo) => todo.completed === false);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos'));
  active.value = 'all';
  filter.value = 'all';
});

onUpdated(() => {
  if (todos.value.length !== JSON.parse(localStorage.getItem('todos')).length) {
    todos.value = JSON.parse(localStorage.getItem('todos'));
  }
});
</script>
