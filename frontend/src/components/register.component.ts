import Vue from "vue";
import { RegisterModel } from "@/model/register.model";


export default Vue.extend({
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
    },
    methods: {
        checkForm() {
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
        },
        swal(status: any) {
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
})