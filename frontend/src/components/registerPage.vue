<template>
  <div>
    <h6 class="h5 mb-2">Welcome back!</h6>
    <p class="text-muted mb-4">Enter your Info to access Register.</p>

    <form>
      <div class="form-group mb-3">
        <label for="register_user_id">ID</label>
        <input
          type="text"
          class="form-control"
          id="register_user_id"
          v-model="userInfo.userId"
        />
      </div>
      <div class="form-group mb-3">
        <label for="register_user_name">Name</label>
        <input
          type="text"
          class="form-control"
          id="register_user_name"
          v-model="userInfo.name"
        />
      </div>
      <div class="form-group mb-3">
        <label for="register_user_pw">Password</label>
        <input
          type="password"
          class="form-control"
          id="register_user_pw"
          v-model="userInfo.password"
        />
      </div>
      <div class="form-group mb-5">
        <label for="register_user_pwc">Password Check</label>
        <input
          type="password"
          class="form-control"
          id="register_user_pwc"
          v-model="passwordC"
        />
      </div>
      <button
        type="submit"
        class="btn btn-theme"
        @click="checkForm"
        style="width: 100%"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./register.component.ts"></script>

<style scoped>
.btn-theme {
  background-color: #6667ab;
  border-color: #6667ab;
  color: #fff;
}
</style>
