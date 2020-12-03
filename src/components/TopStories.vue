<template>
  <div class="top-stories">
    <div class="bg-gray-200">
      <div class="item-box px-4">
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
          <div class="info p-4 text-left">
            <router-link
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
            <div class="flex py-2">
              <button
                class="hover:underline text-gray-500 border-r-2 border-gray-400 pr-4"
              >
                {{ values.score }} points by {{ values.by }}
              </button>
              <button class="hover:underline text-gray-500 px-4">
                <router-link to="">
                  View {{ values.descendants }} comments
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["values"],
};
</script>
