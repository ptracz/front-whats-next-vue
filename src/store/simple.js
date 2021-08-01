import { make } from "vuex-pathify";
import api from "@/services/api";

const state = {
    categories: []
};

const mutations = {
    ...make.mutations(state)
};

const actions = {
    async getCategories({ commit }) {
        const r = await api.get("/WhatsNext/simple/categories");
        commit("SET_CATEGORIES", r.data.data);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
