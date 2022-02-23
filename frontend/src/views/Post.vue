<template>
  <div class="wrapper"

    <Post v-if="pop" v-bind:post="post" @postPop="postPop" @posting="submitPost" />
    <Edit v-if="edit" v-bind:editPost="editPost" @openEdit="openEdit" @editing="editing"/>
    <div class="container pt-3">
      <div class="post_head d-flex p-3">
        <div class="category_container">
          <b-button @click="getMemo()">All</b-button>
        </div>
        <b-button class="ms-auto post_btn" @click="postPop()">
          <b-icon icon="plus-circle"></b-icon>
        </b-button>
      </div>
      <div class="post_container">
        <Memo
          v-bind:memoList="memoList"
          @getMemo="getMemo"
          @editMemo="editMemo"
        />
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

.pop_foot {
  border-top: 1px solid #ddd;
}

.post_btn {
  background-color: #6667ab;
}
</style>id #ddd;
}

.post_btn {
  background-color: #6667ab;
}
</style>