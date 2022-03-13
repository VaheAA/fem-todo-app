<template>
  <div
    class="flex justify-start gap-4 items-center mb-2 py-2 px-2"
    :completed="completed"
  >
    <button
      class="w-6 h-6 border-lightGrayishBlue rounded-full flex items-center justify-center hover:border-veryDarkGrayishBlue"
      :class="{ 'bg-check-gradient': completed, 'border-2': !completed }"
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
    <p class="cursor-pointer text-lg">{{ todoText }}</p>
    <button class="ml-auto">
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
</script>
