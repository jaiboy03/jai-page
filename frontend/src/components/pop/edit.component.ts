import Vue from "vue";

export default Vue.extend({
  props: {
    editPost: {},
  },

  methods: {
    openEditPop() {
      this.$emit("openEdit");
    },

    submitPost() {
      this.$emit("editing", this.editPost);
    },
  },
});
