<template>
  <div class="itembox">
    <div class="bg-gray-200">
      <div class="item-box px-4">
        <div class="title-section">
          <div class="flex">
            <div class="justify-center px-2 py-5 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
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
            <div class="info py-4 text-left">
              <div class="text-black text-2xl">
                {{ selecteditem.title }}
              </div>
              <div class="flex pb-2">
                <button
                  class="hover:underline text-gray-500 border-r-2 border-gray-400 pr-4"
                >
                  {{ selecteditem.score }} points by {{ selecteditem.by }}
                </button>
                <button class="hover:underline text-gray-500 px-4">
                  <router-link to="">
                    View {{ selecteditem.descendants }} comments
                  </router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-section" v-if="selecteditem.kids">
          <CommentRow
            v-for="(item, index) in selecteditem.kids.slice(0, 5)"
            :key="index"
            :comment="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommentRow from "./CommentRow.vue";
export default {
  components: {
    CommentRow,
  },
  name: "story",
  data() {
    return {
      selecteditem: [],
    };
  },

  mounted() {
    let storyid = this.$route.params.id;

    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        storyid +
        ".json?print=pretty"
    )
      .then((res) => res.json())
      .then((item) => {
        this.selecteditem = item;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  },
};
</script>
