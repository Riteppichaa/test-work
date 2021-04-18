export default {
    actions: {
        getMenu({commit}) {
            return new Promise((resolve, reject) => {
                this.$axios.$get('product-category')
                    .then((response) => {
                        commit('setMenu', response)
                    }).catch(() => {
                    reject()
                })
            })
        },
    },
    mutations: {
        setMenu(state, links) {
            state.menuItems = links;
        }
    },
    state: {
        menuItems: []
    },
    getters: {
        menuItems: (state) => {
            return state.menuItems
        }
    }
}
