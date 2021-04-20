<template>
    <div class="full-basket">
        <div v-if="isCheckoutSend">

            <PreparedOrder/>

        </div>
        <div v-else>
            <EmptyBasket v-if="basket.length === 0"/>
            <div v-else>
                <span class="full-basket-title">Товары в корзине</span>
                <div class="card-info">
                    <div v-for="item in basket" class="basket-cart">
                        <img :src="'http://front-test.idalite.com'+ item.photo" alt="">

                        <div class="text-elem">
                            <span class="product-name">{{ item.name }}</span>
                            <span class="product-price">{{ item.price }}</span>
                            <RatingItem :rating="item.rating"/>
                        </div>

                        <div @click="delBasket(item.id)">
                            <IconTrash class="delete-item"/>
                        </div>
                    </div>
                </div>
                <OrderCheckout @checkout="checkout"/>
            </div>

        </div>


    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "FullBasket",
    data() {
        return {
            isCheckoutSend: false
        }
    },
    computed: mapGetters(['basket']),
    methods: {
        ...mapActions(['delBasket']),
        checkout() {
            this.isCheckoutSend = true
        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.full-basket {
    margin-top: 24px;

    .full-basket-title {
        color: $color-grey;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 4px;
    }

    .card-info {
        .basket-cart {
            max-width: 364px;
            max-height: 100px;
            background-color: $color-white;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            padding: 20px;
            display: flex;
            margin: 12px 0;

            img {
                max-width: 100%;
                max-height: 90px;
                margin-right: 35px;
            }

            .text-elem {
                display: flex;
                flex-direction: column;
                margin-right: 22px;
                width: 170px;

                .product-name {
                    color: $color-grey;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 18px;
                    margin-bottom: 6px;
                }

                .product-price {
                    color: $color-black;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 18px;
                    margin-bottom: 18px;
                }
            }

            .delete-item {
                margin-top: 49px;
                cursor: pointer;
            }
        }
    }
}
</style>
