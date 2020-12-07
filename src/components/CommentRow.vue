<template>
  <div class="flex">
    <div class="justify-center text-gray-500 px-4 py-5 space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="14"
        viewBox="0 0 24 24"
        fill="gray"
        stroke="currentColor"
        stroke-width="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-triangle cursor-pointer"
        @click="open = !open"
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        ></path>
      </svg>
    </div>
    <div class="All-comments py-4 text-left">
      <div v-if="!loading">
        <div class="text-sm text-gray-500 underline">
          {{ selectedcomment.by }} {{ selectedcomment.time }} hours ago
        </div>
        <div v-if="open">
          <div v-if="comment" class="text-black">
            {{ selectedcomment.text }}
            <div class="text-md underline pt-4">
              reply
            </div>
            <div v-if="selectedcomment.kids">
              Has {{ selectedcomment.kids.length }} comments
              <CommentRow
                v-for="(item, index) in selectedcomment.kids"
                :key="index"
                :comment="item"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        loading....
      </div>
    </div>
  </div>
</template>

<script>
import CommentRow from "./CommentRow.vue";
export default {
  props: ["comment"],
  name: "CommentRow",
  components: {
    CommentRow,
  },
  data() {
    return {
      selectedcomment: [],
      loading: true,
      open: true,
    };
  },
  mounted() {
    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.comment +
        ".json?print=pretty"
    )
      .then((res) => res.json())
      .then((item) => {
        this.selectedcomment = item;
        this.loading = false;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  },
};
</script>
