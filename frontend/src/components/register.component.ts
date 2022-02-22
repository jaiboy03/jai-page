import Vue from "vue";
import Component from "vue-class-component";
import { RegisterModel } from "@/model/register.model";

@Component
export default class Register extends Vue {
    [x: string]: any;
    data() {
        return {
            userInfo: {
                userId: "",
                name: "",
                password: "",
                role: ""
            } as RegisterModel,
            passwordC: ""
        }
    }

    public checkForm() {
        if (this.userInfo.userId != "" && this.userInfo.name != "" && this.userInfo.password != "" && this.passwordC != "") {
            if (this.userInfo.password == this.passwordC) {
                this.userInfo.role = "user";
                this.$store.dispatch('register', this.userInfo).then(response => {
                    if (response.data.statusCode == 200) {
                        this.swal("success");
                        this.$router.push("/");
                    }
                }).catch(error => {
                    this.swal("fail");
                })
            } else {
                this.swal("pw");
            }
        } else {
            this.swal("value"); return false;
        }
    }
    public swal(status: any) {
        if (status == "value") {
            this.$swal({
                icon: 'error',
                title: 'Please write your Info!',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (status == "fail") {
            this.$swal({
                icon: 'error',
                title: 'Already registered User.',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (status == "pw") {
            this.$swal({
                icon: 'error',
                title: 'Please Check your password!',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            this.$swal({
                icon: 'success',
                title: 'Welcome!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}
