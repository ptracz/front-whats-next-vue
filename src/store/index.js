import Vue from 'vue'
import Vuex from 'vuex'
import pathify from "vuex-pathify";
import simple from "@/store/simple";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [pathify.plugin],
    strict: process.env.NODE_ENV !== "production",
    modules: {
        simple
    }
})
