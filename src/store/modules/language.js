const state = {
    language: "English"
}

const getters = {
    language: state => state.language
}

const actions = {
    setLanguage: ({commit}, language) => {commit('SET_LANGUAGE', language)}
}

const mutations = {
    SET_LANGUAGE: (state, language) => (state.language = language)
}

export default {
    state,
    getters,
    actions,
    mutations
}