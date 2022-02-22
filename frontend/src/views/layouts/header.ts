import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Register extends Vue {
    get isAuth() {
        return this.$store.getters["isAuthenticated"];
    }

    get UserName() {
        return this.$store.getters["getUserID"];
    }

    data() {
        return {
            userName : this.UserName
        }
    }


    public redirect() {
        if (!this.isAuth) {
            this.$swal({
                icon: "success",
                title: "Bye",
                showConfirmButton: false,
                timer: 700
            }).then(()=>{
                this.$router.push("/auth")
            });
        }
    }
    public Logout() {
        this.$store.dispatch("logout", {})
            .then(() => {
                this.redirect();
            })
            .catch(({ message }) => this.$swal({
                icon: 'error',
                title: 'error',
                showConfirmButton: false,
                timer: 1000
            }))
    }
}