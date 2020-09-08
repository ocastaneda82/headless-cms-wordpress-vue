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
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-unused-vars
        const { data } = axios
          .post(
            `http://vue.digitalactive.info/wp-json/jwt-auth/v1/token`,
            credentials
          )
          .then(function(response) {
            const dataOscar = response;
            console.log("Respuesta: " + JSON.stringify(dataOscar));
            commit("SET_USER", response.data);
            resolve(response.data);
          })
          .catch((e) => reject(e));

        // try {
        //   const { data } = axios.post(
        //     `http://vue.digitalactive.info/wp-json/jwt-auth/v1/token`,
        //     credentials
        //   );
        //   commit("SET_USER", data);
        //   resolve(data);
        // } catch (e) {
        //   reject(e);
        // }
      });
    },
    validate({ state }) {
      return axios({
        url: `http://vue.digitalactive.info/wp-json/jwt-auth/v1/token/validate`,
        method: "post",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
    },
  },
  modules: {},
});
