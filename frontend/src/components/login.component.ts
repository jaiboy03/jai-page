import { UserModel } from "@/model/login.model";
import Vue from "vue";
import Component from "vue-class-component";



@Component
export default class Login extends Vue {
    [x: string]: any;
    data() {
        return {
            userInfo: {
                userId: '',
                password: ''
            } as UserModel
        }
    }


    public checkForm() {
        if (this.userInfo.userId == '') { this.swal("value"); return false; }
        if (this.userInfo.password == '') { this.swal("value"); return false; }
        this.$store.dispatch('login', this.userInfo).then(response => {
            if (response.data.statusCode == 200) {
                this.swal("success");
            }
        }).catch(error => {
            this.swal("fail");
        })

    }

    public swal(status: any) {
        if (status == "value") {
            this.$swal({
                icon: 'error',
                title: 'Please write your ID and password!',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (status == "fail") {
            this.$swal({
                icon: 'error',
                title: 'Please Check your ID and password!',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            this.$swal({
                icon: 'success',
                title: 'Welcome !',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                this.$router.push("/");
            })
        }
    }
}
