<template>
    <div class="rating-item">
        <IconStar class="star-rating"/>
        <div class="num-rating">
            {{ rating }}
        </div>
    </div>
</template>

<script>
export default {
    name: "RatingItem",
    props: {
        rating: {
            default: 0
        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.rating-item {
    display: flex;
    justify-content: flex-start;

    .star-rating {
        width: 12px;
    }
    .num-rating {
        color: $color-yellow;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        align-self: center;
        padding-left: 3px;
    }
}

</style>
