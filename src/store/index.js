import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    DELETE_USER(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, credentials) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(
            `http://directorio:8888/wp-json/jwt-auth/v1/token`,
            credentials
          );
          commit("SET_USER", data);
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });
    },
    validate({ state }) {
      return axios({
        url: `http://directorio:8888/wp-json/jwt-auth/v1/token/validate`,
        method: "post",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
    },
  },
  modules: {},
});
