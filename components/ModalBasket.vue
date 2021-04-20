<template>
    <div :class="['modal-basket', {'visible': isOpen}]">
        <div class="basket-filling">
            <div class="basket-container">
                <div class="basket-title">Корзина</div>
                <div @click="closeBasket">
                    <IconCloseButton class="closing-icon"/>
                </div>
            </div>
            <FullBasket/>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ModalBasket",
    props: {
        isOpen: {
            default: false
        }
    },
    data() {
        return {
            isBasketOpen: false
        }
    },
    computed: mapGetters(['basket']),
    methods: {
        closeBasket() {
            console.log(11111)
            this.$emit('modalClose')
        }
    }

}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.modal-basket {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;

    &.visible {
        display: block
    }

    .basket-filling {
        width: 100%;
        max-width: 410px;
        height: 100%;
        background-color: $color-white;
        box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px 0px 0px 8px;
        padding: 50px;
        margin-left: auto;

        .basket-container {
            display: flex;
            justify-content: space-between;

            .basket-title {
                color: $color-ultra-black;
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 41px;
            }

            .closing-icon {
                margin-top: 10px;
            }
        }
    }
}
</style>
