<template>
  <div>
    <h4 class="mb-2">Welcome back!</h4>
    <p class="text-muted mb-4">Enter your ID and password to access login.</p>

    <div class="form-group mb-3">
      <label for="login_user_id">ID</label>
      <input
        type="text"
        class="form-control"
        id="login_user_id"
        v-model="userInfo.userId"
        placeholder="ID"
      />
    </div>
    <div class="form-group mb-5">
      <label for="login_user_pw">Password</label>
      <input
        type="password"
        class="form-control"
        id="login_user_pw"
        v-model="userInfo.password"
        placeholder="Password"
      />
    </div>
    <button
      @click="checkForm"
      class="btn btn-theme"
      style="width: 100%; fontweight: bold"
    >
      Login
    </button>
    <!-- <button type="submit" class="btn btn-theme" v-on:click="loginProcess">Login</button> -->
  </div>
</template>

<script lang="ts" src="./login.component.ts"></script>

<style scoped>
.btn-theme {
  background-color: #5369f8;
  border-color: #5369f8;
  color: #fff;
}
.theme {
  color: #5369f8 !important;
}
</style>