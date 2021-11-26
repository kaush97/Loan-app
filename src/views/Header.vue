<template>
  <q-header
    elevated="false"
    class=""
    style="
      box-shadow: 2px 13px 7px -10px rgba(1, 209, 103, 1);
      -webkit-box-shadow: 2px 13px 7px -10px rgba(1, 209, 103, 1);
      -moz-box-shadow: 2px 13px 7px -10px rgba(1, 209, 103, 1);
      background-color: #0c365a;
    "
  >
    <q-toolbar>
      <q-btn
        class="lt-sm inline"
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        style="background: #01d167; color: white"
      >
        <img
          importance="high"
          rel="preload"
          as="image"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDMwIDMxIj4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOTc3IDE3LjA2M2MtMS4zMTUgMC0yLjM4MS0uODMyLTIuMzgxLTEuODU5IDAtMS4wMjcgMS4wNjYtMS44NTkgMi4zODEtMS44NTlIMjcuNjJjMS4zMTMgMCAyLjM4LjgzMiAyLjM4IDEuODYgMCAxLjAyNi0xLjA2NyAxLjg1OC0yLjM4IDEuODU4SDguOTc3em0tNi41OTUgOS42MjJoMjUuMjM1YzEuMzE2IDAgMi4zODMuODMzIDIuMzgzIDEuODYxdi4wMDJjMCAxLjAyOC0xLjA2NyAxLjg2LTIuMzgzIDEuODZIMi4zODJjLTEuMzE1IDAtMi4zODItLjgzMi0yLjM4Mi0xLjg2di0uMDAyYzAtMS4wMjggMS4wNjctMS44NiAyLjM4Mi0xLjg2ek0yLjM4MiAwaDI1LjIzNUMyOC45MzMgMCAzMCAuODMzIDMwIDEuODZ2LjAwM2MwIDEuMDI3LTEuMDY3IDEuODYtMi4zODMgMS44NkgyLjM4MkMxLjA2NyAzLjcyMiAwIDIuODkgMCAxLjg2MlYxLjg2QzAgLjgzMyAxLjA2NyAwIDIuMzgyIDB6Ii8+Cjwvc3ZnPgo="
          alt="burger-icon"
          width="30"
          height="17"
          style="width: 60%"
      /></q-btn>
      <q-toolbar-title
        ><img
          class="gt-sm inline"
          importance="high"
          rel="preload"
          as="image"
          src="../assets/logo.png"
        />
      </q-toolbar-title>
      <q-tabs active-color="green" class="gt-sm inline" v-model="tab">
        <q-tab name="images" label="Instant Loan" />
        <q-tab name="videos" label="Personal Loans" />
        <q-tab name="articles" label="Employer Tie-up" />
      </q-tabs>

      <div class="q-pa-md">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          style="background: #01d167; color: white"
          icon="account_circle"
        >
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div v-if="user" class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  @click="logout"
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
              <div v-else class="column items-center">
                <q-avatar icon="account_circle" size="72px"> </q-avatar>
                <q-btn
                  color="cyan"
                  label="Login"
                  push
                  size="sm"
                  v-close-popup
                  @click="this.$router.push('/login')"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>

      <!-- <div>...</div> -->
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class="text-white"
    style="background-color: #0c365a"
  >
    <q-list>
      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <q-item-section avatar>
          <!-- <q-icon name="school" /> -->
          <img
            class=""
            importance="high"
            rel="preload"
            as="image"
            src="../assets/logo.png"
          />
        </q-item-section>
        <q-item-section> </q-item-section>
      </q-item>
      <q-item-label header
        >Trusted way of banking for 3,000+ SMEs and startups in
        Singapore</q-item-label
      >
      <hr />
      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <q-item-section avatar>
          <q-icon name="money" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Instant Loan</q-item-label>
          <q-item-label caption class="text-green"
            >Get an Instant Loan.</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        target="_blank"
        href="https://github.com/quasarframework/"
      >
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Personal Loans</q-item-label>
          <q-item-label caption class="text-green"
            >Get Quick Personal Loan
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
        <q-item-section avatar>
          <q-icon name="account_circle" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Employer Tie-up</q-item-label>
          <q-item-label caption class="text-green"
            >Tie-up with employers</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
        <q-item-section avatar>
          <q-icon name="info" />
        </q-item-section>
        <q-item-section>
          <q-item-label>About Us</q-item-label>
          <q-item-label caption class="text-green"
            >Know more about us</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script>
  import { ref } from "vue";
  import { useStore } from "../store";
  //   import axios from "axios";
  const store = useStore();
  export default {
    setup() {
      return {
        leftDrawerOpen: ref(false),
        tab: ref("images"),
        user: ref(store.state.isLogedIn),
      };
    },
    methods: {
      logout() {
        store.dispatch("isLogedIn", false);
        this.$router.push("/login");
      },
    },
    name: "HelloWorld",
  };
</script>
<style scoped>
  @media screen and (max-width: 600px) {
    .mainpage {
      background-color: #e1fafa;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .q-item-section {
      /* background-color: cyan; */
      /* position: fixed; */
    }
    h5 {
      font-size: 15px;
    }
    h4 {
      font-size: 20px;
    }
    .para {
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
