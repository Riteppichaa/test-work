<template>
    <div>
        <div class="basket-link" @click="openBasket">
            <IconBasket/>
            <div class="count">{{ basket.length }}</div>
        </div>
        <ModalBasket :isOpen="isBasketOpen" @modalClose="modalClose"/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BasketLink",
    data() {
        return {
            isBasketOpen: false,
        }
    },
    mounted() {
        this.getBasket()
    },
    computed: mapGetters(['basket']),
    methods: {
        ...mapActions(['getBasket']),
        openBasket() {
            this.isBasketOpen = true
        },
        modalClose() {
            console.log(22222)
            this.isBasketOpen = false
        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";
.basket-link {
    position: relative;

    .count {
        position: absolute;
        top: 0px;
        right: 0px;
        color: #fff;
        background: $color-grey-light;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        font-size: 9px;
        text-align: center;
    }
}
</style>
