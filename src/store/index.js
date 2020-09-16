import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    id: null,
    name: null,
    description: null,
    url: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_DATA_USER(state, { id, name, description, url }) {
      state.id = id;
      state.name = name;
      state.description = description;
      state.url = url;
    },
    DELETE_USER(state) {
      state.user = null;
    },
    DELETE_DATA_USER(state) {
      state.user = null;
      state.id = null;
      state.name = null;
      state.description = null;
      state.url = null;
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
            commit("SET_USER", response.data);
            // dataWP(response.data.user_nicename);
            resolve(response.data.user_nicename);
            // resolve(response.data);
          })
          .catch((e) => reject(e));
      });
    },

    // guardo los datos del usuario en el store
    montarDataUsuario({ commit }) {
      const usuarioNice = this.state.user.user_nicename;
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-unused-vars
        const { data } = axios
          .get(
            "https://vuejs.digitalactive.info/wp-json/wp/v2/users/?slug=" +
              usuarioNice
          )
          .then((response) => {
            const id = response.data[0].id;
            const name = response.data[0].name;
            const description = response.data[0].description;
            const url = response.data[0].url;

            commit("SET_DATA_USER", {
              id,
              name,
              description,
              url,
            });
            resolve(response.data);
          })
          .catch((e) => reject(e));
      });
    },

    // eslint-disable-next-line no-unused-vars
    editarDataUsuario({ commit }, { name, url, description }) {
      const token = this.state.user.token;
      const id = this.state.id;
      // revisar si traen datos del form o si no dejarles lo que ya está en el store
      const uName = name ? name : this.state.name;
      const uUrl = url ? url : this.state.url;
      const uDescription = description ? description : this.state.description;
      // console.log(name, uName);
      // console.log(url, uUrl);
      // console.log(description, uDescription);

      return new Promise((resolve, reject) => {
        axios
          .post(
            "https://vuejs.digitalactive.info/wp-json/wp/v2/users/" + id,
            {
              name: uName,
              url: uUrl,
              description: uDescription,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => {
            const id = this.state.id;
            const name = uName;
            const description = uDescription;
            const url = uUrl;

            console.log(id, name, description, url);

            commit("SET_DATA_USER", {
              id,
              name,
              description,
              url,
            });
            resolve(response.data);
          })
          // .then((response) => resolve(response.data))

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
  },
  modules: {},
});
