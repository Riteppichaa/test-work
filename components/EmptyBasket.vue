<template>
    <div class="empty-basket">
        <div class="empty-basket-container">
            <div class="empty-description">
                Пока что вы ничего не добавили в корзину.
            </div>
            <div class="go-to-catalog">Перейти к выбору</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmptyBasket"
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.empty-basket {
    width: 364px;
    display: flex;
    flex-direction: column;

    .empty-basket-container {
        margin-top: 24px;

        .empty-description {
            color: $color-ultra-black;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 28px;
        }

        .go-to-catalog {
            background-color: $color-black;
            border-radius: 8px;
            width: 364px;
            height: 37px;
            color: $color-white;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            padding-top: 13px;
            margin-top: 24px;
        }
    }
}
</style>
