<template>
  <div>
    <b-navbar
      class="navbar-expand-sm navbar-dark theme px-4"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="/">JJ's Site</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/poster">Memo</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto">
          <!-- <b-nav-item-dropdown text="User">
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item-dropdown right v-if="isAuth">
            <template slot="button-content" v-text="UserName">
              <b-icon icon="person-fill"></b-icon>
              <b>{{ UserName }}</b>
            </template>
            <b-dropdown-item href="#">
              <b-icon icon="gear-fill" aria-hidden="true"></b-icon>&nbsp;<b
                >Account</b
              >
            </b-dropdown-item>
            <b-dropdown-item href="#" v-on:click="Logout()"
              ><b-icon icon="power" aria-hidden="true"></b-icon>&nbsp;<b
                >Logout</b
              >
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts" src="./header.ts">
</script>

<style scoped>
.theme {
  background-color: #6667ab !important;
}
</style>
<style>
.dropdown-menu {
  right: 0 !important;
}
</style>
