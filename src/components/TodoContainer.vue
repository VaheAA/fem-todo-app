<template>
  <div
    class="bg-hero-pattern-light dark:bg-hero-pattern-dark h-72 bg-cover bg-no-repeat"
  >
    <div class="max-w-xl mx-auto px-4 pt-14">
      <TotoHeader />
      <TodoInput @add-todo="handleSubmit" v-model="todoInput" />
      <TodoList
        :todos="todos"
        @handleDelete="handleDelete"
        @handleComplete="handleComplete"
      />
      <TodoFooter :count="todos.length" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import TotoHeader from './TotoHeader.vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoFooter from './TodoFooter.vue';

const todoInput = ref('');
const completed = ref(false);

const todos = ref(JSON.parse(localStorage.getItem('todos')));

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
      todoInput.value = '';
      completed.value = false;
    } else {
      localStorage.setItem('todos', JSON.stringify([newTodo]));
    }
    todos.value = JSON.parse(localStorage.getItem('todos'));
  }
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

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos'));
});

onUpdated(() => {
  if (todos.value.length !== JSON.parse(localStorage.getItem('todos')).length) {
    todos.value = JSON.parse(localStorage.getItem('todos'));
  }
});
</script>
