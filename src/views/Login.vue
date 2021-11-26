<template>
  <div class="row items-start maindiv">
    <q-card v-if="login" class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-6">
          <q-card class="my-card" flat style="width: 300px">
            <q-img
              src="../assets/logo.png"
              spinner-color="white"
              style="
                margin: 0 auto 15px auto;
                display: block;
                height: 40px;
                width: 150px;
              "
            ></q-img>

            <q-card-section>
              <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                style="padding: 0 29px 18px 29px"
              >
                <q-input
                  color="green"
                  v-model="user"
                  label="Username"
                  hint=""
                  lazy-rules
                  :rules="[
                    (user) =>
                      (user && user.length > 0) || 'please enter username',
                  ]"
                ></q-input>
                <q-input
                  color="green"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="password"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (password) =>
                      (password && password.length > 0) ||
                      'please enter password',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    ></q-icon>
                  </template>
                </q-input>

                <div>
                  <q-btn
                    style="
                      display: block;
                      margin: 30px auto 0 auto;
                      padding: 10 30px;
                    "
                    label="Login"
                    type="submit"
                    color="cyan"
                  ></q-btn>
                </div>
              </q-form>
              <q-btn
                style="
                  display: block;
                  margin: 30px auto 0 auto;
                  padding: 15 30px;
                "
                label="Create new account"
                type="submit"
                color="red"
                @click="login = !login"
              ></q-btn>
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-img
          class="col-6 gt-sm inline"
          src="https://portal.earlysalary.com/static/LoginImg.svg"
        />
      </q-card-section>
    </q-card>
    <q-card v-else class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-6">
          <q-card
            class="my-"
            flat
            style="
              -webkit-box-shadow: -10px 0px 13px -7px #5b9773,
                10px 0px 13px -7px #000000,
                5px 5px 15px 5px rgba(91, 151, 115, 0);
              box-shadow: -10px 0px 13px -7px #5b9773,
                10px 0px 13px -7px #5b9773,
                5px 5px 15px 5px rgba(91, 151, 115, 0);
              border-radius: 15px;
              width: 300px;
            "
          >
            <q-img
              src="../assets/logo.png"
              spinner-color="white"
              style="
                margin: 0 auto 15px auto;
                display: block;
                height: 40px;
                width: 150px;
              "
            ></q-img>

            <q-card-section>
              <q-form class="q-gutter-md" style="padding: 0 29px 18px 29px">
                <q-input
                  color="green"
                  v-model="fullName"
                  label="Full Name"
                  hint=""
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'please enter you full name',
                  ]"
                ></q-input>
                <q-input
                  color="green"
                  v-model="user"
                  label="Username"
                  hint=""
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'please enter username',
                  ]"
                ></q-input>
                <q-input
                  color="green"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="password"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'please enter password',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    ></q-icon>
                  </template>
                </q-input>

                <div></div>
              </q-form>
              <q-btn
                style="
                  display: block;
                  margin: 30px auto 0 auto;
                  padding: 10 30px;
                "
                @click="onRegister"
                label="Register"
                type=""
                color="cyan"
              ></q-btn>
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-img
          class="col-6 gt-sm inline"
          src="https://portal.earlysalary.com/static/LoginImg.svg"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { useStore } from "../store";
  import axios from "axios";
  const store = useStore();

  export default defineComponent({
    //   setup(props, context) {
    // const store = useStore()

    // },
    data() {
      return {
        login: true,
        user: "",
        password: "",
        isPwd: true,
        fullName: "",
      };
    },
    methods: {
      onSubmit() {
        interface form {
          email: string;
          password: string;
        }
        const loginform: form = {
          email: this.user,
          password: this.password,
        };
        axios.get("http://localhost:3000/people/").then((res) => {
          console.log(res, "res");
          res.data.filter((e: any) => {
            if (
              e.email == loginform.email &&
              e.password == loginform.password
            ) {
              console.log("success");
              this.$router.push("/createloan");
              store.dispatch("isLogedIn", true);
            } else {
              console.log("error");
            }
          });
        });
      },
      onRegister() {
        debugger;
        interface form {
          fullName: string;
          email: string;
          password: string;
        }
        const loginform: form = {
          fullName: this.fullName,
          email: this.user,
          password: this.password,
        };
        axios
          .post("http://localhost:3000/people/", {
            id: Math.random(),
            name: loginform.fullName,
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/gusoto/128.jpg",
            phone: "109-433-7524",
            email: loginform.email,
            department: "Engineering",
            password: loginform.password,
          })
          .then((res) => {
            debugger;
            console.log(res, "resppppp");
            this.login = true;
            // res.data.filter((e: any) => {
            //   if (
            //     e.email == loginform.email &&
            //     e.password == loginform.password
            //   ) {
            //     console.log("success");
            //     this.$router.push("/createloan");
            //   } else {
            //     console.log("error");
            //   }
            // });
          });
      },
    },
  });
</script>
<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 750px
  .maindiv
    background-color:#0C365A
    height:100vh
    display: flex
    align-items: center
    justify-content: center
</style>
