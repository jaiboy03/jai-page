<template>
  <div class="wrapper">
    <div class="container pt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="card border-0">
            <div class="card-body p-0">
              <div class="row no-gutters">
                <div class="p-5 auth_container">
                  <div class="mb-4 d-flex">
                    <h1 class="title text-theme">
                      {{ this.title }}
                    </h1>
                  </div>
                  <login-page v-if="!this.register" />
                  <register-page v-if="this.register" />
                  <div
                    class="text-muted text-center mt-3 mb-0"
                    v-if="!this.register"
                  >
                    Don't have an account?
                    <a
                      href="#"
                      v-on:click="toRegister"
                      class="text-primary ml-1"
                      >Register</a
                    >
                  </div>
                  <div
                    class="text-muted text-center mt-3 mb-0"
                    v-if="this.register"
                  >
                    Already have an account?
                    <a
                      href="#"
                      v-on:click="toRegister"
                      class="text-primary ml-1"
                      >login</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import loginPage from "../components/loginPage.vue";
import registerPage from "../components/registerPage.vue";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      register: false,
      title: "Login",
    };
  },
  components: {
    loginPage,
    registerPage,
  },
  methods: {
    toRegister: function () {
      this.register = !this.register;
      this.title = this.register ? "Register" : "Login";
    },
  },
});
</script>

<style scoped>
* {
  font: Helvetica, arial, sans-serif;
}

.wrapper {
  height: calc(100vh - 56px);
}

.auth_container {
  border-radius: 0.4rem;
}

.title {
  font-weight: bold;
}
.text-theme {
  color: #6667ab !important;
}
</style>
