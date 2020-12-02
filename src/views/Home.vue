<template>
  <div class="home">
    <div class="container mx-auto">
      <Header />
      <div class="articles">
        <ArticleBox
          v-for="(item, index) in items"
          :key="index"
          :values="item"
        />
      </div>
      {{ item }}
      <div class="news">
        <div
          class="bg-gray-200  border-r-4 border-l-4 border-b-4 border-blue-400"
        >
          <div class="item-box">
            <div class="flex">
              <div class="Number flex justify-center p-4 space-x-2">
                <div class="text-2xl">1.</div>
                <div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="31"
                      viewBox="0 0 24 24"
                      fill="white"
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
                  </button>
                </div>
              </div>
              <div class="info p-4">
                <router-link
                  to=""
                  class="title text-2xl hover:underline hover:font-extrabold"
                >
                  {{ items.title }}
                </router-link>
                <div class="flex py-2">
                  <button
                    class="hover:underline text-gray-500 border-r-2 border-gray-400 pr-4"
                  >
                    {{ items.score }} points by {{ items.by }}
                  </button>
                  <button class="hover:underline text-gray-500 px-4">
                    View {{ items.descendants }} comments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ArticleBox from "../components/ArticleBox.vue";

export default {
  name: "Home",
  components: {
    Header,
    ArticleBox,
  },
  data: () => {
    return {
      items: [],
    };
  },
  mounted() {
    this.$http
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(function(item) {
        this.items = item.body;
      })[0]
      .catch(function(error) {
        console.log("Error", error);
      });

    console.log(this.item);
  },
};
</script>
