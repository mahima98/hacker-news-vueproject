<template>
  <router-link
    v-if="values"
    :to="{
      name: 'Cmtpage',
      params: {
        id: values,
      },
    }"
    class="title text-2xl hover:underline hover:font-extrabold"
  >
    {{ values }}
  </router-link>
</template>

<script>
export default {
  prop: ["values"],
};
</script>

<style lang="scss" scoped></style>
