<template>
  <div class="flex">
    <div class="justify-center px-2 py-4 space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 24 24"
        fill="gray"
        stroke="currentColor"
        stroke-width="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-triangle"
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        ></path>
      </svg>
    </div>
    <div class="All-comments py-4 text-left">
      <div v-if="commentvalues" class="text-black">
        Happy birthday soekjin
        {{ commentvalues }}
      </div>
      <!-- <div class="text-black text-sm">
        There is an easy explanation for this: developers optimize their code
        when the product owner tells them to spend time on this. The product
        owner will tell them to optimize when product owner notices that the
        software is getting too slow. When new hardware is released, slowdowns
        that would be visible on older hardware won't be easily noticeable, so
        programmers will work on other features rather than optimizing code.
        Until the code becomes too slow to run on current hardware, then they
        work until it becomes usable again.
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["commentvalues"],
};
</script>
