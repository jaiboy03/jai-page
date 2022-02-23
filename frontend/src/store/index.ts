import jwt from "@/common/jwt";
import http from "@/https/httpRequest";
import { RegisterModel } from "@/model/register.model";
import { UserModel } from "@/model/login.model";
import Vue from "vue";
import Vuex from "vuex";
import { PostModel } from "@/model/post.model";
import { UpdateModel } from "@/model/update.model";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: {
      accessToken: jwt.getToken(),
    },
    isAuthenticated: !!jwt.getToken(),
    userId: jwt.getInfo(),
  },
  getters: {
    getAccessToken: function (state) {
      return state.token.accessToken;
    },
    isAuthenticated: function (state) {
      return state.isAuthenticated;
    },
    getUserID: function (state) {
      return state.userId;
    },
  },
  mutations: {
    logout: function (state, payload = {}) {
      state.token.accessToken = "";
      state.isAuthenticated = false;
      jwt.destroyToken();
      jwt.destroyInfo();
    },
    login: function (state, payload = {}) {
      state.token.accessToken = payload.accessToken;
      state.isAuthenticated = true;
      jwt.saveToken(payload.accessToken);
    },
  },
  actions: {
    logout: function (context, payload) {
      return new Promise((resolve) => {
        setTimeout(function () {
          context.commit("logout", payload);
          resolve({});
        }, 1000);
      });
    },
    register: function (context, payload) {
      const params: RegisterModel = {
        userId: payload.userId,
        name: payload.name,
        password: payload.password,
        role: payload.role,
      };
      return new Promise((resolve, reject) => {
        http
          .post("/user", params)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    login: function (context, payload) {
      const params: UserModel = {
        userId: payload.userId,
        password: payload.password,
      };
      return new Promise((resolve, reject) => {
        http
          .post("/auth/login", params)
          .then((response) => {
            const { data } = response;
            context.commit("login", {
              accessToken: data.accessToken,
            });
            jwt.saveInfo(response.data.userId);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    postMemo: function (context, payload) {
      const date = new Date();

      const params: PostModel = {
        writerId: payload.writerId,
        writeDate: date.toISOString(),
        title: payload.title,
        contents: payload.contents,
        category: "All",
      };
      return new Promise((resolve, reject) => {
        http
          .post("/board", params)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getMemo: function (context, payload) {
      return new Promise((resolve, reject) => {
        http
          .get("/board/" + context.state.userId)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteMemo: function (context, payload) {
      return new Promise((resolve, reject) => {
        http
          .post("/board/" + payload)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateMemo: function (context, payload) {
      const params: UpdateModel = {
        id: payload.id,
        writerId: payload.writerId,
        title: payload.title,
        contents: payload.contents,
      };
      return new Promise((resolve, reject) => {
        http
          .patch("/board", params)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },

  modules: {},
});
