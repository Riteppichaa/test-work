<template>
    <div class="order-checkout">
        <span class="checkout-title">Оформить заказ</span>

        <form @submit.prevent="send">
            <input type="text" placeholder="Ваше имя" v-model="name">
            <input type="text" placeholder="Телефон" v-mask="'+7 (###) ###-##-##'" v-model="phone">
            <input type="text" placeholder="Адрес" v-model="address">

            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "OrderCheckout",
    data() {
        return {
            name: '',
            phone: '',
            address: ''
        }
    },
    methods: {
        ...mapActions(['clearBasket']),
        send() {
            let isErr = false
            if (this.name === '') {
                isErr = true
            }
            if (this.phone.length !== 18){
                isErr = true
            }
            if (this.address === ''){
                isErr = true
            }
            if (isErr) {
                alert("Заполнены  не все поля!")
                return
            }
            console.log(this.name)
            console.log(this.phone)
            console.log(this.address)
            this.$emit('checkout')
            this.clearBasket()
        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.order-checkout {
    .checkout-title {
        color: $color-grey;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        input {
            margin-top: 16px;
            width: 380px;
            background: $color-grey-extra-light;
            border: 1px solid $color-grey-extra-light;
            border-radius: 8px;
            padding: 14px;

            &::-webkit-input-placeholder {
                color: $color-grey-light;
                font-size: 16px;
            }

            &::-moz-placeholder {
                color: $color-grey-light;
                font-size: 16px;
            }

            &::-ms-input-placeholder {
                color: $color-grey-light;
                font-size: 16px;
            }

            &::placeholder {
                color: $color-grey-light;
                font-size: 16px;
            }
        }
        button {
            margin-top: 24px;
            width: 410px;
            background: $color-black;
            border: 1px solid $color-black;
            border-radius: 8px;
            color: $color-white;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            padding: 13px;
            &:hover {
                background: $color-grey;
                cursor: pointer;
            }
        }
    }
}

</style>
