import Vue from "vue";
import Memo from "@/components/memo.vue";
import Edit from "@/components/pop/editPage.vue";
import Post from "@/components/pop/postPage.vue";
import { PostModel } from "@/model/post.model";
import { UpdateModel } from "@/model/update.model";

export default Vue.extend({
  components: {
    Memo,
    Edit,
    Post,
  },
  data() {
    return {
      pop: false,
      edit: false,
      post: {
        writerId: "",
        title: "",
        contents: "",
      } as PostModel,
      memoList: [],
      editPost: {
        writerId: "",
        id: 0,
        title: "",
        contents: "",
      },
    };
  },
  created() {
    this.getMemo();
  },

  methods: {
    postPop() {
      this.post.title = "";
      this.post.contents = "";
      this.pop = !this.pop;
    },
    getMemo() {
      this.$store.dispatch("getMemo").then((response) => {
        this.memoList = response.data;
      });
    },
    submitPost() {
      if (this.post.contents != "") {
        this.post.writerId = this.$store.getters["getUserID"];
        this.$store
          .dispatch("postMemo", this.post)
          .then((response) => {
            if (response.data.statusCode == 200) {
              this.$swal({
                icon: "success",
                title: "Write Success",
                showConfirmButton: false,
                timer: 1000,
              }).then(() => {
                this.getMemo();
                this.postPop();
              });
            }
          })
          .catch((message) => {
            alert(message);
          });
        // return;
      } else {
        this.$swal({
          icon: "error",
          title: "Empty contents",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      return;
    },
    openEdit() {
      this.edit = !this.edit;
    },
    editMemo(id: number) {
      this.openEdit();
      const memo: any = this.memoList.find((x) => x.id === id);
      this.editPost.id = id;
      this.editPost.title = memo.title;
      this.editPost.contents = memo.contents;
    },
    editing(editPost: UpdateModel) {
      if (editPost.contents != "") {
        editPost.writerId = this.$store.getters["getUserID"];
        this.$store
          .dispatch("updateMemo", editPost)
          .then((response) => {
            this.$swal({
              icon: "success",
              title: "Updated",
              showConfirmButton: false,
              timer: 800,
            }).then(() => {
              this.openEdit();
              this.getMemo();
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
  },
});
