<template>
  <div class="CmtPage">
    <div class="container mx-auto">
      <Header />

      <div class="news">
        <div
          class="bg-gray-200  border-r-4 border-l-4 border-b-4 border-blue-400"
        >
          <StoryBox />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import StoryBox from "../components/StoryBox.vue";

export default {
  components: {
    Header,
    StoryBox,
  },
};
</script>
