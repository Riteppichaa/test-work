export default {
    actions: {
        addToBasket({commit}, item) {
            console.log(item)
            if (localStorage.getItem('basket') === null) {
                localStorage.setItem('basket', JSON.stringify([]))
            }
            let basket = JSON.parse(localStorage.getItem('basket'))
            console.log(basket)

            basket.push(item)
            console.log(basket)
            commit('setBasket', basket)
            localStorage.setItem('basket', JSON.stringify(basket))

        },
        getBasket({commit}) {
            if (localStorage.getItem('basket') === null) {
                localStorage.setItem('basket', JSON.stringify([]))
            }
            let basket = JSON.parse(localStorage.getItem('basket'))
            commit('setBasket', basket)
        },
        delBasket({commit}, id) {
            let basket = JSON.parse(localStorage.getItem('basket'))
            let arr = basket.filter(data => {
                return id !== data.id
            })
            localStorage.setItem('basket', JSON.stringify(arr))
            commit('setBasket', arr)

        },
        clearBasket({commit}){
            localStorage.setItem('basket', JSON.stringify([]))
            commit('setBasket', [])
        }
    },
    mutations: {
        setBasket(state, items) {
            state.basket = items
        }
    },
    state: {
        basket: []
    },
    getters: {
        basket: (state) => {
            return state.basket
        }
    }
}
