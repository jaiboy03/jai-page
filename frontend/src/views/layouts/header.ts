import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      userName: this.$store.getters["getUserID"],
    };
  },

  computed: {
    isAuth: function () {
      return this.$store.getters["isAuthenticated"];
    },
  },
  methods: {
    redirect() {
      if (!this.isAuth) {
        this.$swal({
          icon: "success",
          title: "Bye",
          showConfirmButton: false,
          timer: 700,
        }).then(() => {
          this.$router.push("/auth");
        });
      }
    },
    Logout() {
      this.$store
        .dispatch("logout", {})
        .then(() => {
          this.redirect();
        })
        .catch(({ message }) =>
          this.$swal({
            icon: "error",
            title: "error",
            showConfirmButton: false,
            timer: 1000,
          })
        );
    },
  },
});
