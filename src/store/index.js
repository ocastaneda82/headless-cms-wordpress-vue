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
            `https://vuejs.digitalactive.info/wp-json/jwt-auth/v1/token`,
            credentials
          )
          .then(function(response) {
            // const dataOscar = response;
            // console.log("Respuesta: " + JSON.stringify(dataOscar.data));
            // console.log("Nombre: " + dataOscar.data.user_display_name);
            // console.log("Correo: " + dataOscar.data.user_email);
            // console.log("Token: " + dataOscar.data.token);
            commit("SET_USER", response.data);
            resolve(response.data);
          })
          .catch((e) => reject(e));
      });
    },
    // eslint-disable-next-line no-unused-vars
    validate({ state }) {
      // console.log("info: " + state.user.token);
      return new Promise((resolve, reject) => {
        axios
          .post(
            `https://vuejs.digitalactive.info/wp-json/jwt-auth/v1/token/validate`,
            {},
            {
              headers: { Authorization: `Bearer ${state.user.token}` },
            }
          )
          .then(function(response) {
            console.log(response);
            resolve(response.data);
          })
          .catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    },
    // information() {
    //   return "Hola";
    // },
  },
  modules: {},
});
