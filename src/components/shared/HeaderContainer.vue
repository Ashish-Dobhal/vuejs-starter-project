<template lang="pug">
div(class="w-full border-b border-solid border-brand-gray-1")
  div(class="mx-auto my-16 text-center")

    slot(name="title") 
      h1(class="font-bold") Main header title
    slot(name="subTitle") 
      h2 sub header title
    //- slot(name="default")
    //-   h1 this is the default slot

</template>
<script>
export default {
  name: 'HeaderContainer'
}
</script>
