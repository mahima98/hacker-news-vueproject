<template>
  <div class="flex">
    <div class="justify-center text-gray-500 px-4 py-5 space-x-2">
      <!-- <svg
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
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        ></path>
      </svg> -->
      <svg
        class="w-4 h-4 bg-gray-400 p-1 rounded-full"
        data-darkreader-inline-fill=""
        data-darkreader-inline-stroke=""
        fill="white"
        stroke="currentColor"
        style="--darkreader-inline-fill:none; --darkreader-inline-stroke:currentColor;"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        @click="open = false"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    </div>
    <div class="All-comments py-4 text-left">
      <div v-if="!loading">
        <div class="flex space-x-2">
          <div class="text-sm text-gray-500 underline">
            {{ selectedcomment.by }} {{ selectedcomment.time }} hours ago
          </div>
          <div @click="open = true">
            <svg
              class="w-4 h-4"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              style="--darkreader-inline-fill:none; --darkreader-inline-stroke:currentColor;"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              class="w-4 h-4"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              style="--darkreader-inline-fill:none; --darkreader-inline-stroke:currentColor;"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              @click="open = false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              ></path>
            </svg>
          </div>
          <!-- <div>
            <div
              x-show="open === false"
              @click="open = true"
              class="font-bold px-4 py-2 cursor-pointer"
            >
              +
            </div>
            <div
              x-show="open === true"
              @click="open = false"
              class="font-bold px-4 pt-2 cursor-pointer"
            >
              -
            </div>
          </div> -->
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
