export default {
    actions: {
        getProducts({commit}, id = null) {
            return new Promise((resolve, reject) => {
                let params = {}
                if (id) {
                    params = 'category=' + id
                }
                this.$axios.$get('product?' + params)
                    .then((response) => {
                        commit('setProducts', response)
                    }).catch(() => {
                    reject()
                })
            })
        },
        sortProducts({commit, state}, sort) {
            let arr = [...state.productItems]

            arr.sort((a, b) => {
                switch (sort) {
                    case 'популярности':
                        return a.rating-b.rating
                    case 'цене':
                        return a.price-b.price
                }
            })
            commit('setProducts', arr)

        }
    },
    mutations: {
        setProducts(state, products) {
            state.productItems = products;
        }
    },
    state: {
        productItems: []
    },
    getters: {
        productItems: (state) => {
            return state.productItems
        }
    }
}
