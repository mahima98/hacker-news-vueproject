<template>
  <div class="home">
    <div class="container mx-auto">
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
              <button class="btn-deco pr-4">
                New
              </button>
              <button class="btn-deco px-4">
                comments
              </button>
              <button class="px-4 hover:underline">jobs</button>
            </div>
          </div>
        </div>
      </div>
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
                  AWS Lambda pricing now per ms (amazon.com)
                </router-link>
                <div class="flex py-2">
                  <button class="hover:underline text-gray-500">
                    View 121 comments
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
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
