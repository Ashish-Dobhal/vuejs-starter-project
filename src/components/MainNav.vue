<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" target="_blank" class="flex h-full items-center text-xl" :text="company"></a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="(navItem, index) in navItems" :key="navItem.title" class="h-full"
              :class="['h-full', index !== 0 ? 'ml-9' : '']">
              <!-- FYI https://stackoverflow.com/questions/50766775/vue-v-for-conditional-styling -->
              <!-- :class="{'ml-9': index!==0" this works too for single properties -->
              <a class="flex h-full items-center py-2.5">
                {{ navItem.title }}</a>
            </li>
            <div class="absolute right-0 mx-2 flex h-full items-center rounded-full px-2 py-2">
              <action-button v-if="!signedIn" text="Sign In" @click="signIn" />
              <profile-image v-else src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png"
                alt="Profile Pic" @click="signOut" />
            </div>
          </ul>
        </nav>
      </div>
      <the-subnav v-if="signedIn"></the-subnav>
    </div>
  </header>
  <!-- for loop playground -->
  <!-- <div class="relative ml-10 mt-20 flex h-16 w-full flex-col space-x-4 align-middle">
  <h2>For Lop tryouts</h2>
  <div v-for="item in employees" :key="item.id">
    <li>{{ item.name }}</li>
  </div>
</div> -->
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubnav from "./TheSubnav.vue"; "@/components/TheSubnav.vue"
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, TheSubnav },
  data() {
    return {
      company: "Dobbs Diaries",
      url: "https://careers.google.com",
      styledCompany: `<b>Dobbs Diaries</b>`,
      showDescription: false,
      employees: [
        { id: 2, name: "Ashish" },
        { id: 1, name: "Nupur" },
      ],
      navItems: [
        { title: "Teams", url: "www.google.com" },
        { title: "Location", url: "www.google.com" },
        { title: "Life at Dobbs Diaries", url: "www.google.com" },
        { title: "How we Hire", url: "www.google.com" },
        { title: "Students", url: "www.google.com" },
        { title: "Jobs", url: "www.google.com" },
      ],
      signedIn: false,
    };
  },
  methods: {
    isFirstElement(index) {
      return index !== 0;
    },
    signIn(_event) {
      this.signedIn = true;
    },
    signOut(_event) {
      this.signedIn = false;
    },
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.signedIn,
        'h-32': this.signedIn,
      }
    }
  }
};

</script>

