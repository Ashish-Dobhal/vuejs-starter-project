<template>
  <header class="w-full text-sm ">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a class="flex h-full items-center text-xl" href="/">{{ company }}</a>
        <button class="bg-blue-600 m-4 absolute right-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
      </div> 
    </div>
  </header>  
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Dobbs Diaries"
    }
  }
};
</script>
<style scoped>
  
</style>