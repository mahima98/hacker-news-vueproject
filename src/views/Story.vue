<template>
  <div class="story">
    <div class="container mx-auto">
      <Header />

      <div class="news">
        <div class="bg-gray-200 py-2">
          <ItemBox />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import ItemBox from "../components/ItemBox.vue";

export default {
  components: {
    Header,
    ItemBox,
  },
};
</script>
