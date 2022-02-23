import Vue from "vue";

export default Vue.extend({
  props: {
    post: {},
  },

  methods: {
    openPostPop() {
      this.$emit("postPop");
    },

    submitPost() {
      this.$emit("posting", this.post);
    },
  },
});
