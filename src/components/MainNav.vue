<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <!-- <a v-bind:href="url" class="flex h-full items-center text-xl">{{ company }}</a> -->
        <!-- recommeded by vue style guide -->
        <a v-bind:href="url" target="_blank" class="flex h-full items-center text-xl" :text="company"></a>
        <!-- <div v-if="showDescription" class="ml-5 mt-0 flex h-full items-center text-sm">
          <i>a Ashish Ltd Company.</i>
        </div> -->
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li :class="['h-full', index !== 0 ? 'ml-9' : '']" v-for="(navItem, index) in navItems"
              :key="navItem.title">
              <!-- :class="{'ml-9': index!==0" this works too for single properties -->
              <a class="flex h-full items-center py-2.5"> {{ navItem.title }}</a>
            </li>
            <button class="absolute right-0 m-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Sign In
            </button>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <div class="relative ml-10 mt-20 flex h-16 w-full flex-row space-x-4 align-middle">
    <h2 class="">Action Panel</h2>
    <!-- Toggle btn code: https://codepen.io/lhermann/pen/EBGZRZ -->
    <button class="h-8 rounded bg-green-600 px-2 font-bold text-white hover:bg-green-700"
      @click="showDescription = !showDescription">
      Toggle Me
    </button>
  </div>
  <div class="relative ml-10 mt-20 flex h-16 w-full flex-col space-x-4 align-middle">
    <h2>For Lop tryouts</h2>
    <div v-for="item in employees" :key="item.id">
      <li>{{ item.name }}</li>
    </div>
    <!-- Toggle btn code: https://codepen.io/lhermann/pen/EBGZRZ -->
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Dobbs Diaries",
      url: "https://careers.google.com",
      styledCompany: `<b>Dobbs Diaries</b>`,
      showDescription: false,
      employees: [
        { id: 2, name: "Ashish" },
        { id: 1, name: "Nupur" }
      ],
      navItems: [
        { title: "Teams", url: "www.google.com" },
        { title: "Location", url: "www.google.com" },
        { title: "Life at Dobbs Diaries", url: "www.google.com" },
        { title: "How we Hire", url: "www.google.com" },
        { title: "Students", url: "www.google.com" },
        { title: "Jobs", url: "www.google.com" }
      ]
    }
  },
  methods: {
    isFirstElement(index) {
      return index !== 0
    }
  }

}
</script>
