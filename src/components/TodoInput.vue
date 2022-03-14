<template>
  <form
    class="w-full flex bg-veryLightGray dark:bg-veryDarkDesBlue rounded-md items-center px-4 mt-11"
    @submit.prevent.enter="createTodo"
  >
    <span
      class="w-6 h-6 border-2 border-lightGrayishBlue rounded-full flex items-center justify-center cursor-pointer"
      :class="{ 'bg-check-gradient': completed, 'border-2': !completed }"
      @click="markAsComplete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
        v-if="completed"
      >
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
    </span>
    <input
      class="border-0 outline-none py-3 px-3 md:py-4 md:px-4 rounded-md w-full dark:bg-veryDarkDesBlue dark:text-darkGrayishBlue text-veryDarkGrayishBlue sm:text-lg"
      type="text"
      placeholder="Create new todo..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </form>
</template>

<script setup>
defineProps(['modelValue', 'completed']);
const emit = defineEmits(['addTodo', 'update:modelValue', 'complete']);

const createTodo = () => {
  emit('addTodo');
};

const markAsComplete = () => {
  emit('complete');
};
</script>
