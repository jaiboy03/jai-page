import Vue from "vue";
import Component from "vue-class-component";
import Memo from "@/components/memo.vue";
import { PostModel } from "@/model/post.model";

@Component({
    components: {
        Memo
    }
})
export default class Post extends Vue {
    [x: string]: any;
    data() {
        return {
            pop: false,
            post: {
                title: '',
                contents: ''
            } as PostModel
        };
    }

    public postPop() {
        this.post.title = '';
        this.post.contents = '';
        this.pop = !this.pop;
    }

    public submitPost() {
        if (this.post.contents != '') {
            console.log("submit");
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