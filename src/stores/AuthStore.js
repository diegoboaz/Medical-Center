import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "../axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: useStorage("authUser", []),
    authErrors: [],
    authStatus: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    async getUser() {
      await axios
        .get("/api/user")
        .then((response) => {
          if (response.status == 204 || response.status == 200) {
            this.authUser = response.data;
            this.authStatus = response.status;
          }
        })
        .catch((reason) => {
          this.authStatus = reason.response.status;
        });
    },
    async handleLogin(email, password) {
      await axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 204) {
            this.getUser();
            this.authStatus = response.status;
          }
          // 204 sucess
        })
        .catch((reason) => {
          // 422 fail
          this.authStatus = reason.response.status;
        });
    },
    async handleLogout() {
      await axios
        .post("/logout")
        .catch((reason) => {
          this.authStatus = reason.response.status;
        });
    },
  },
});
