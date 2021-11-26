<template>
  <div>
    <Header />
    <q-page class="flex flex-center">
      <div style="color: #241d41" class="row justify-evenly mainpage">
        <div class="col-md-4 col-sm-12 q-ml-sm q-mr-sm">
          <div class="">
            <h5>Instant Cash For</h5>
            <h4><b>Instant Life Upgrades</b></h4>
            <q-list>
              <q-item>
                <q-item-section class="q-item-section" side>
                  <q-icon color="yellow-10" name="money" />
                </q-item-section>
                <q-item-section> Up to ₹5 Lakhs </q-item-section>
              </q-item>
              <hr />
              <q-item>
                <q-item-section class="q-item-section" side>
                  <q-icon color="yellow-10" name="home" />
                </q-item-section>
                <q-item-section> Instant Transfer to Bank </q-item-section>
              </q-item>
              <hr />
              <q-item>
                <q-item-section class="q-item-section" side>
                  <q-icon color="yellow-10" name="close" />
                </q-item-section>
                <q-item-section> No Prepayment Charges </q-item-section>
              </q-item>
              <hr />
            </q-list>
            <div style="" class="q-mt-sm para">
              <p>
                EarlySalary is a one stop solution for all your instant cash
                needs. Be it shopping, travel, paying bills or any cash
                requirement that can help you sail through your difficult
                moments.
              </p>
            </div>
            <q-btn
              color="yellow-10"
              icon="paid"
              icon-right="east"
              label="Get Instant Loan"
            />
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <img
            src="https://d2faqwysrrz1wo.cloudfront.net/_next/static/images/group-17-567ecb9d594b9fc828b4b05aff0ca3ef.png"
            style="height: 440px; max-width: 450px"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import { ref } from "vue";
  import Header from "../views/Header.vue";
  export default {
    data() {
      return {
        leftDrawerOpen: ref(false),
        tab: ref("images"),
        user: ref(false),
      };
    },
    components: {
      Header,
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
