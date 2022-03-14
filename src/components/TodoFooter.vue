<template>
  <div
    class="flex justify-between py-3 px-3 md:py-4 md:px-4 rounded-b-md bg-veryLightGray dark:bg-veryDarkDesBlue text-sm"
  >
    <p class="text-lightGrayishBlue dark:text-darkGrayishBlue">
      {{ count }} Items left
    </p>
    <div class="hidden md:flex flex-row gap-4">
      <span
        v-for="status in statuses"
        :key="status"
        class="text-lightGrayishBlue capitalize dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
        :class="{ 'text-brightBlue': active === status }"
        @click="changeFilter(status)"
        :status="status"
        >{{ status }}</span
      >
    </div>
    <button
      class="text-lightGrayishBlue dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
      @click="cleanCompleted"
    >
      Clear Completed
    </button>
  </div>
  <div
    class="flex md:hidden flex-row justify-center gap-4 bg-veryLightGray dark:bg-veryDarkDesBlue py-3 px-3 md:py-4 md:px-4 mt-2 rounded-md"
  >
    <span
      v-for="status in statuses"
      :key="status"
      class="text-lightGrayishBlue capitalize dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
      :class="{
        'text-brightBlue': active === status,
        'dark:text-brightBlue': active === status
      }"
      @click="changeFilter(status)"
      :status="status"
      >{{ status }}</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  count: Number,
  status: String,
  active: String
});

const statuses = ref(['all', 'active', 'completed']);

const emit = defineEmits(['changeFilter', 'cleanCompleted']);

const changeFilter = (status) => {
  emit('changeFilter', status);
};

const cleanCompleted = () => {
  emit('cleanCompleted');
};
</script>
