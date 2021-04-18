<template>
    <div class="catalog-item-container">
        <div class="section-item-picture">
            <img :src="'http://front-test.idalite.com'+ item.photo" alt="">
            <RatingItem class="rating" :rating="item.rating"/>
            <IconBasket class="basket"/>
        </div>
        <div class="item-description">
            <span class="product-name">{{ item.name}}</span>
            <span class="product-price">{{ item.price }} ₽</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CatalogItemContainer",
    props: {
        item: {}
    },
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.catalog-item-container {
    background: $color-white;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 16px;

    .section-item-picture {
        text-align: center;
        position: relative;

        img {
            max-width: 100%;
            height: 180px;
            margin-bottom: 16px;
        }

        .rating {
            position: absolute;
            top: 0;
            left: 0;
        }

        .basket {
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            fill: $color-grey-light;
            cursor: pointer;
            &:hover {
                fill: $color-black
            }
        }
    }

    .item-description {
        display: flex;
        flex-direction: column;

        .product-name {
            color: $color-grey;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            white-space: pre;
            overflow: hidden;
        }

        .product-price {
            color: $color-black;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
        }
    }
}

</style>
