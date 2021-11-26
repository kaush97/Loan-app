<template>
  <div>
    <Header />
    <div class="q-pa-md">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step
          :name="1"
          color="green"
          title="Update your information"
          icon="settings"
          :done="step > 1"
        >
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            style="padding: 0 29px 18px 29px"
          >
            <q-input
              style="border-color: red"
              outlined
              color="green"
              v-model="user"
              label="First Name"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter first name',
              ]"
            ></q-input>
            <q-input
              outlined
              color="green"
              v-model="user"
              label="Last Name"
              hint=""
              lazy-rules
              :rules="[
                (user) => (user && user.length > 0) || 'please enter last name',
              ]"
            ></q-input>
            <q-input
              outlined
              type="number"
              color="green"
              v-model="user"
              label="Mobile Number"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter mobile number',
              ]"
            ></q-input>
            <q-input
              outlined
              color="green"
              v-model="user"
              label="Current Address"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter current address',
              ]"
            ></q-input>
            <q-input
              outlined
              color="green"
              v-model="user"
              label="Permanent Address"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter permanent address',
              ]"
            ></q-input>
            <div>
              <q-btn
                style="
                  display: block;
                  margin: 30px auto 0 auto;
                  padding: 10 30px;
                "
                label="Update"
                type="submit"
                color="green"
              ></q-btn>
            </div>
          </q-form>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Next" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          color="green"
          :name="2"
          title="Update Nominee Details"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            style="padding: 0 29px 18px 29px"
          >
            <q-input
              outlined
              color="green"
              v-model="user"
              label="Nominee Name"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter nominee name',
              ]"
            ></q-input>
            <q-input
              outlined
              type="number"
              color="green"
              v-model="user"
              label="Mobile Number"
              hint=""
              lazy-rules
              :rules="[
                (user) =>
                  (user && user.length > 0) || 'please enter mobile number',
              ]"
            ></q-input>
            <div>
              <q-btn
                style="
                  display: block;
                  margin: 30px auto 0 auto;
                  padding: 10 30px;
                "
                label="Update"
                type="submit"
                color="green"
              ></q-btn>
            </div>
          </q-form>

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Back"
              class="q-ml-sm"
              :done="step > 3"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          color="green"
          :name="3"
          title="Update Nominee Details"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 3"
        >
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            style="padding: 0 29px 18px 29px"
          >
            <q-badge color="secondary">
              Amount: {{ amount }} (0 to 10)
            </q-badge>
            <q-slider
              :rules="[
                (amount) =>
                  (amount && amount.length > 0) || 'please select valid amount',
              ]"
              v-model="amount"
              color="light-green"
              :step="20000"
              markers
              label-always
              :min="50000"
              :max="500000"
            />
            <q-badge color="secondary">
              Loan Terms(months): {{ terms }} (0 to 10)
            </q-badge>
            <q-slider
              v-model="terms"
              color="light-green"
              label-always
              markers
              :step="6"
              :min="6"
              :max="60"
            />
            <div>
              <q-btn
                style="
                  display: block;
                  margin: 30px auto 0 auto;
                  padding: 10 30px;
                "
                label="Update"
                type="submit"
                color="green"
              ></q-btn>
            </div>
          </q-form>
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step color="green" :name="4" title="Add Card" icon="add_comment">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs col-md-6">
                <div class="text-overline">Overline</div>
                <!-- <div class="text-h5 q-mt-sm q-mb-xs">Title</div> -->
                <div class="text-caption text-grey">
                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                    style="padding: 0 29px 18px 29px"
                  >
                    <q-input
                      color="green"
                      outlined
                      type="tel"
                      inputmode="numeric"
                      pattern="[0-9\s]{13,19}"
                      class="card-input__input"
                      autocomplete="cc-number"
                      maxlength="16"
                      placeholder="xxxx xxxx xxxx xxxx"
                      v-model="text"
                      label="Card Number"
                      lazy-rules
                      :rules="[
                        (user) =>
                          (user && user.length > 0) || 'please enter username',
                      ]"
                    ></q-input>
                    <q-input
                      outlined
                      type="text"
                      class="card-input__input"
                      autocomplete="cc-number"
                      maxlength="16"
                      placeholder="card holder name"
                      v-model="text"
                      label="Card Holder"
                    />
                    <div class="row">
                      <q-select
                        class="col-md-4"
                        outlined
                        v-model="model"
                        :options="options"
                        label="Month"
                      />
                      <q-select
                        class="col-md-4"
                        outlined
                        v-model="model"
                        :options="options1"
                        label="Year"
                      />
                      <q-input
                        outlined
                        type="password"
                        class="col-md-4"
                        autocomplete="cc-number"
                        maxlength="16"
                        placeholder="CVV"
                        v-model="text"
                        label="CVV"
                      />
                    </div>

                    <div>
                      <!-- <q-btn
                        style="
                          display: block;
                          margin: 30px auto 0 auto;
                          padding: 10 30px;
                        "
                        label="Login"
                        type="submit"
                        color="cyan"
                      ></q-btn> -->
                    </div>
                  </q-form>
                </div>
              </q-card-section>

              <q-card-section class="col-md-6 flex">
                <q-card
                  elevated
                  class="my-inner-card text gt-sm"
                  style="background: #0c365a; border-radius: 20px"
                >
                  <q-card-section>
                    <div class="row" style="float: right">
                      <q-img
                        src="../assets/Home@3x.png"
                        spinner-color="white"
                        style="display: block; height: 20px; width: 20px"
                      ></q-img>
                      <div class="text-white" style="text-indent: 10px">
                        <b style="letter-spacing: 5px">aspire</b>
                      </div>
                    </div>
                  </q-card-section>

                  <q-card-section class="q-pt-none text-white">
                    <h6>Kaushal Kumar</h6>
                    <h6>XXXX - XXXX - XXXX - XXXX</h6>
                  </q-card-section>
                  <div class="row q-mr-4" style="margin-left: 80%">
                    <div class="text-white" style="text-indent: 10px">
                      <b style="letter-spacing: 5px">VISA</b>
                    </div>
                  </div>
                </q-card>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <!-- <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat> 7:30PM </q-btn>
              <q-btn flat color="primary"> Reserve </q-btn>
            </q-card-actions> -->
          </q-card>

          <q-stepper-navigation>
            <q-btn color="primary" label="Finish" />
            <q-btn
              flat
              @click="step = 3"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>
<script>
  import Header from "../views/Header.vue";

  import { ref } from "vue";

  export default {
    setup() {
      return {
        step: ref(1),
        amount: ref(50000),
        terms: ref(6),
        model: ref(null),
        options: [
          "Jan",
          "Feb",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        options1: [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027",
          "2029",
          "2030",
        ],
      };
    },
    components: {
      Header,
    },
  };
</script>
<style></style>
<style lang="sass" scoped>

  .my-card
    width: 100%
    max-width: 1050px
  .my-inner-card
    width: 100%
    max-width: 950px
</style>
