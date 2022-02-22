import Vue from "vue";
import Memo from "@/components/memo.vue";
import { PostModel } from "@/model/post.model";

export default Vue.extend({
    components: {
        Memo
    },
    data() {
        return {
            pop: false,
            post: {
                writerId: '',
                title: '',
                contents: '',
            } as PostModel,
            memoList : []
        };
    },
    created() {
        this.getMemo()
    },

    methods: {
        postPop() {
            this.post.title = '';
            this.post.contents = '';
            this.pop = !this.pop;
        },
        getMemo() {
            this.$store.dispatch("getMemo").then(response => {
                this.memoList = response.data;
            });
        },
        submitPost() {
            if (this.post.contents != '' ) {
                this.post.writerId = this.$store.getters["getUserID"];
                console.log(this.post.writerId);
                this.$store.dispatch("postMemo", this.post).then(response => {
                    if (response.data.statusCode == 200) {
                        this.$swal({
                            icon: 'success',
                            title: 'Write Success',
                            showConfirmButton: false,
                            timer: 1000
                        }).then(() => {
                            this.getMemo();
                            this.postPop();
                        });
                    }
                }).catch(message => {
                    alert(message);
                });
                // return;
            } else {
                this.$swal({
                    icon: 'error',
                    title: 'Empty contents',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            return;
        }
    }
})