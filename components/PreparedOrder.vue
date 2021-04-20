<template>
    <div class="prepared-order">
        <IconOkOrder class="ok-picture"/>
        <div class="order-info">
            <span class="order-info-title">Заявка успешно отправлена</span>
            <span class="order-info-text">Вскоре наш менеджер свяжется с Вами</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreparedOrder"
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.prepared-order {
    display: flex;
    flex-direction: column;
    margin-top: 366px;
    .ok-picture {
        text-align: center;
    }
    .order-info {
        margin-top: 24px;
        display: flex;
        flex-direction: column;

        .order-info-title {
            color: $color-ultra-black;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 31px;
            text-align: center;
        }
        .order-info-text {
            color: $color-grey;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
        }
    }
}
</style>
