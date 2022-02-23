import Vue from "vue";

export default Vue.extend({
  props: {
    memoList: Array,
  },
  methods: {
    deleteMemo(id: number) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("deleteMemo", id)
            .then((response) => {
              this.$swal({
                icon: "success",
                title: "Deleted",
                showConfirmButton: false,
                timer: 800,
              });
              this.$emit("getMemo");
            })
            .catch((error) => {
              alert(error);
            });
        }
      });
    },
    editMemo(id: number) {
      this.$emit("editMemo", id);
    },
  },
});
