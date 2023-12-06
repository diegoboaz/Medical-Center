import { defineStore } from "pinia";
import axios from "../axios";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    csrfConnectionStatus: null,
  }),
  getters: {
    csrfStatus: (state) => state.csrfConnectionStatus,
  },
  actions: {
    async isCsrfValid() {
      try {
        await axios
          .get("/sanctum/csrf-cookie")
          .then((response) => {
            response.status === 204
              ? (this.csrfConnectionStatus = response.status)
              : null;
          })
          .catch((reason) => {
            this.csrfConnectionStatus = reason.response.status;
          });
        return this.csrfConnectionStatus === 204 ? true : false;
      } catch (error) {
        return false;
      }
    },
  },
});
