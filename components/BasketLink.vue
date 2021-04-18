<template>
    <div class="basket-link">
        <IconBasket/>
        <div class="count">{{ basketItemCount }}</div>
    </div>
</template>

<script>
export default {
    name: "BasketLink",
    data() {
        return {
            basketItemCount: 0
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
        font-size: 8px;
        text-align: center;
    }
}
</style>
