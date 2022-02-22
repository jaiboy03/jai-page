<template>
  <div class="wrapper">
    <div class="wrap row" v-if="pop">
      <div class="background" @click="postPop"></div>
      <div class="post_pop col-9 col-xl-4 p-3">
        <form>
          <div class="pop_head">
            <b-form-group label="Title" label-for="title">
              <b-input
                id="title"
                class="mt-2"
                placeholder="Enter Title"
                v-model="post.title"
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
                v-model="post.contents"
              ></b-form-textarea>
            </b-form-group>
          </div>
          <div class="pop_foot mt-3 d-flex pt-3">
            <b-button class="ms-auto btn-danger" @click="postPop()"
              >Cancel</b-button
            >
            <b-button class="ms-2 post_btn" @click="submitPost()">Post</b-button>
          </div>
        </form>
      </div>
    </div>
    <div class="container pt-3">
      <div class="post_head d-flex p-3">
        <div class="category_container">
          <b-button>All</b-button>
        </div>
        <b-button class="ms-auto post_btn" @click="postPop()">
          <b-icon icon="plus-circle"></b-icon>
        </b-button>
      </div>
      <div class="post_container row">
        <Memo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Post.ts"></script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - 56px);
}
.post_head {
  width: 100%;
  background-color: white;
  border-radius: 0.4rem;
}

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
.post_pop {
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

.pop_foot {
  border-top: 1px solid #ddd;
}

.post_btn {
  background-color: #6667ab;
}
</style>