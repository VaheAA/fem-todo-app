<template>
  <div
    class="flex justify-start gap-4 items-center mb-2 last:mb-0 py-3 px-3 md:py-4 md:px-4 border-b border-lightGrayishBlue"
    :completed="completed"
  >
    <button
      class="w-6 h-6 border-lightGrayishBlue dark:border-veryDarkGrayishBlue rounded-full flex items-center justify-center hover:border-veryDarkGrayishBlue dark:hover:border-veryLightGrayishBlue"
      :class="{ 'bg-check-gradient': completed, 'border-2': !completed }"
      @click="completeTask(id)"
    >
      <svg
        v-if="completed"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
      >
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
    </button>
    <p
      class="cursor-pointer text-lg dark:text-lightGrayishBlue"
      :class="{
        'line-through': completed,
        'text-veryLightGrayishBlue': completed,
        'text-veryDarkGrayishBlue': !completed,
        'dark:text-veryDarkGrayishBlue': completed
      }"
    >
      {{ todoText }}
    </p>
    <button class="ml-auto" @click="deleteItem(id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  completed: Boolean,
  todoText: String
});

const emit = defineEmits(['delete', 'complete']);

const deleteItem = (id) => {
  emit('delete', id);
};

const completeTask = (id) => {
  emit('complete', id);
};
</script>
