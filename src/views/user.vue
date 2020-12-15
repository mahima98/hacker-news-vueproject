<template>
  <div class="user">
    <div class="container mx-auto">
      <Header />
      <div class="flex">
        <div class="text-gray-500">
          <div class="p-4 font-bold text-right">User:</div>
          <div class="p-4 font-bold text-right">Created:</div>
          <div class="p-4 font-bold text-right">Karma:</div>
          <div class="p-4 font-bold text-right">about:</div>
        </div>

        <div class="text-gray-500">
          <div class="user px-3 py-4 text-left">
            {{ selecteditem.id }}
          </div>
          <div class="Created px-3 py-4 text-left">
            {{ selecteditem.created }}
          </div>
          <div class="Karma px-3 py-4 text-left">
            {{ selecteditem.karma }}
          </div>
          <div class="about px-3 py-4 text-left">
            {{ selecteditem.about }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  name: "user",
  data() {
    return {
      selecteditem: [],
    };
  },

  mounted() {
    let userby = this.$route.params.by;

    fetch(
      "https://hacker-news.firebaseio.com/v0/user/" +
        userby +
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

<style lang="scss" scoped></style>
