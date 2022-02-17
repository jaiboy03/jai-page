import { UserModel } from "@/model/login.model";
// import { HttpRequest } from "@/util/http/httpRequest";
import Vue from "vue";
import Component from "vue-class-component";

// export const login = (body: UserModel) => {
//     return new HttpRequest().request({
//         url: '/user/login',
//         method: 'POST',
//         data: body,
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         }
//     })
// }

@Component
export default class Login extends Vue {
    [x: string]: any;
    data() {
        return {
            userInfo: {
                id: '',
                password: ''
            } as UserModel
        }
    }


    public checkForm() {
        console.log(this.userInfo)
        return;
    }
}
