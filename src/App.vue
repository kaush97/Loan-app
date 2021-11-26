<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- <login v-if="user" /> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  // import Login from "./views/Login.vue";
  // import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "LayoutDefault",

    components: {
      // Login,
      // HelloWorld,
    },

    setup() {
      return {
        leftDrawerOpen: ref(false),
        user: false,
      };
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,400;1,700;1,800&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
</style>
