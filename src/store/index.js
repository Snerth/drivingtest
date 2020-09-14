import Vuex from "vuex";
import Vue from "vue";
import questions from "./modules/questions";
import language from './modules/language'

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    questions,
    language
  },
});
