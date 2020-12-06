<template>
  <div class="Ask">
    <div class="container mx-auto pb-10">
      <Header />
      <div class="Ask-HN-questions">
        <div class="bg-gray-200 py-4">
          <Item
            v-for="(item, index) in items"
            :key="item.id"
            :values="item"
            :numbers="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Item from "../components/Item.vue";

export default {
  name: "Ask",
  components: {
    Header,
    Item,
  },
  data: () => {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
      .then((res) => res.json())
      .then((item) => {
        this.items = item;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  },
};
</script>
