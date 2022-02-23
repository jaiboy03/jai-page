<template>
  <div class="wrap row">
    <div class="background" @click="openEditPop"></div>
    <div class="edit_pop col-9 col-xl-4 p-3">
      <form>
        <div class="pop_head">
          <b-form-group label="Title" label-for="title">
            <b-input
              id="title"
              class="mt-2"
              placeholder="Enter Title"
              v-model="editPost.title"
            ></b-input>
          </b-form-group>
        </div>
        <div class="pop_body mt-3">
          <b-form-group label="Contents" label-for="contents">
            <b-form-textarea
              id="contents"
              rows="8"
              class="mt-2"
              placeholder="Enter something.."
              no-resize
              v-model="editPost.contents"
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div class="pop_foot mt-3 d-flex pt-3">
          <b-button class="ms-auto btn-danger" @click="openEditPop()"
            >Cancel</b-button
          >
          <b-button class="ms-2 post_btn" @click="submitPost()">Post</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./edit.component.ts"></script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.1);
}
.background {
  width: 100%;
  height: 100vh;
}
.post_pop,
.edit_pop {
  position: absolute;
  z-index: 6;
  background-color: white;
  top: 50%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  border-radius: 0.4rem;

  .label {
    font-weight: bold;
  }
}
</style>