<template>
    <div class="header">
        <div class="header-container container">

            <div class="heading">TestList</div>
            <BasketLink class="basket-icon"/>
        </div>

    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.header-container {
    display: flex;
    justify-content: space-between;

    > * {
        margin-top: 18px;
        margin-bottom: 20px
    }
}

.header {
    height: 66px;
    background-color: #fff;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    .heading {
        color: $color-grey;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 28px;
        display: inline-block;
    }
}


.basket-icon {
    display: inline-block;
}
</style>
