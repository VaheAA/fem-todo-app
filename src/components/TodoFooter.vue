<template>
  <div
    class="flex justify-between px-4 py-4 rounded-b-md bg-veryLightGray dark:bg-veryDarkDesBlue text-sm"
  >
    <p class="text-lightGrayishBlue dark:text-darkGrayishBlue">
      {{ count }} Items left
    </p>
    <div class="flex flex-row gap-4">
      <span
        class="text-lightGrayishBlue dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
        >All</span
      >
      <span
        class="text-lightGrayishBlue dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
        >Active</span
      >
      <span
        class="text-lightGrayishBlue dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
        >Completed</span
      >
    </div>
    <button
      class="text-lightGrayishBlue dark:text-darkGrayishBlue dark:hover:text-lightGrayishBlue hover:text-darkGrayishBlue cursor-pointer"
    >
      Clear Completed
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: Number
});
</script>
