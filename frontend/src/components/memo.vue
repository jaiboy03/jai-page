<template>
  <div class="col-md-4 single-note-item mt-3" style="">
    <div class="card card-body">
      <span class="side-stick"></span>
      <h5
        class="note-title text-truncate w-75 mb-0"
        data-noteheading="Book a Ticket for Movie"
      >
        Book a Ticket for Movie
        <i class="point fa fa-circle ml-1 font-10"></i>
      </h5>
      <p class="note-date font-12 text-muted">11 March 2009</p>
      <div class="note-content">
        <p class="note-inner-content text-muted">
          Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./memo.component.ts">
</script>

<style lang="scss" scoped>
.single-note-item {
  border-radius: 0.4rem;
}
</style>