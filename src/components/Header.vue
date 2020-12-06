<template>
  <div class="header">
    <div class="header-deco">
      <div class="p-2 flex items-center justify-center">
        <svg
          class="w-16 h-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="p-2">
        <div class="font-extrabold text-4xl">Hacker News</div>
        <div class="flex py-2 text-lg">
          <button class="pr-4">
            <router-link to="/">Top stories</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
