<template>
  <div
    class="flex justify-between py-3 px-3 md:py-4 md:px-4 rounded-b-md bg-veryLightGray dark:bg-veryDarkDesBlue text-sm"
  >
    <p class="text-lightGrayishBlue dark:text-darkGrayishBlue">
      {{ count }} Items left
    </p>
    <div class="hidden md:flex flex-row gap-4">
      <span
        v-for="category in categoryes"
        :key="category"
        class="text-lightGrayishBlue capitalize dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
        :class="{
          'text-brightBlue': active === category,
          'dark:text-brightBlue': active === category
        }"
        @click="changeFilter(category)"
        :category="category"
        >{{ category }}</span
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
      v-for="category in categoryes"
      :key="category"
      class="text-lightGrayishBlue capitalize dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
      :class="{
        'text-brightBlue': active === category,
        'dark:text-brightBlue': active === category
      }"
      @click="changeFilter(category)"
      :category="category"
      >{{ category }}</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  count: Number,
  category: String,
  active: String
});

const categoryes = ref(['all', 'active', 'completed']);

const emit = defineEmits(['changeFilter', 'cleanCompleted']);

const changeFilter = (category) => {
  emit('changeFilter', category);
};

const cleanCompleted = () => {
  emit('cleanCompleted');
};
</script>
