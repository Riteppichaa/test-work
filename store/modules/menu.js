export default {
    actions: {
        getMenu({commit}) {
            return new Promise((resolve, reject) => {
                console.log(111111)
                this.$axios.$get('product-category')
                    .then((response) => {
                        console.log(response)
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
