<template>
  <div class="flex">
    <div class="justify-center text-gray-500 px-2 py-5 space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
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
      <div class="text-sm text-gray-500">
        {{ selectedcomment.by }} {{ selectedcomment.time }} hours ago
      </div>
      <div v-if="commentvalues" class="text-black">
        {{ selectedcomment.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["commentvalues"],
  data() {
    return {
      selectedcomment: [],
    };
  },
  mounted() {
    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.commentvalues +
        ".json?print=pretty"
    )
      .then((res) => res.json())
      .then((item) => {
        this.selectedcomment = item;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  },
};
</script>
