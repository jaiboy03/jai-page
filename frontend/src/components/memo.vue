<template>
  <div class="row">
    <div
      class="col-xl-4 col-lg-6 memo_container mt-3"
      v-for="item in memoList"
      v-bind:key="item.id"
    >
      <div class="card card-body">
        <div class="card-top d-flex" v-if="item.title != ''">
          <div class="card-title h3">
            {{ item.title }}
          </div>
          <b-dropdown no-caret right class="ms-auto memo_menu" size="sm">
            <template slot="button-content">
              <b-icon icon="three-dots-vertical"></b-icon>
            </template>
            <b-dropdown-item @click="editMemo(item.id)">Edit</b-dropdown-item>
            <b-dropdown-item variant="danger" @click="deleteMemo(item.id)"
              >Delete</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="card-middle d-flex">
          <p class="text-muted write_date">
            {{ new Date(item.writeDate).toLocaleString() }}
          </p>
          <b-dropdown
            no-caret
            right
            class="ms-auto memo_menu"
            size="sm"
            v-if="item.title == ''"
          >
            <template slot="button-content">
              <b-icon icon="three-dots-vertical"></b-icon>
            </template>
            <b-dropdown-item @click="editMemo(item.id)">Edit</b-dropdown-item>
            <b-dropdown-item variant="danger" @click="deleteMemo(item.id)"
              >Delete</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <p class="note-inner-content text-muted card-text">
          {{ item.contents }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./memo.component.ts"></script>

<style lang="scss" scoped>
.memo_container {
  border-radius: 0.4rem;
}
.card {
  border: none;
}
.write_date {
  font-size: 14px;
}

.note-inner-content {
  font: 21px Calibri, sans-serif;
}

::v-deep .dropdown .dropdown-toggle {
  background-color: #fff;
  outline: none;
  border: none;
  color: #000 !important;

  &:focus {
    outline: none !important;
    background-color: #fff !important;
  }
}

::v-deep.show > .btn-secondary.dropdown-toggle {
  outline: none !important;
  background-color: #fff !important;
}
</style>
