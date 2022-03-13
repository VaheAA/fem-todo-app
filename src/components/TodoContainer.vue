<template>
  <div
    class="bg-hero-pattern-light dark:bg-hero-pattern-dark h-72 bg-cover bg-no-repeat"
  >
    <div class="max-w-xl mx-auto px-4 pt-14">
      <TotoHeader />
      <TodoInput @add-todo="handleSubmit" v-model="todoInput" />
      <TodoList :todos="todos" />
      <TodoFooter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
    } else {
      localStorage.setItem('todos', JSON.stringify([newTodo]));
    }
  }
};
</script>
