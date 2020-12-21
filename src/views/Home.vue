<template>
  <div class="home">
    <div class="container mx-auto pb-10">
      <Header />
      <div class="topstories">
        <div class="bg-gray-200 py-4">
          <Item
            v-for="(item, index) in items.slice(0, 10)"
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
  name: "Home",
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
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => res.json())
      .then((item) => {
        this.items = item;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

    // this.$http
    //   .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")

    //   .then(function(item) {
    //     this.items = item.body;
    //   })
    //   .catch(function(error) {
    //     console.log("Error", error);
    //   });

    // console.log(this.item);
  },
};
</script>
