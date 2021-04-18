<template>
    <div :class="['side-menu-link', {'active': active}]">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "SideMenuLink",
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.side-menu-link {
    color: $color-grey-light;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 16px;
    &.active {
        color: $color-black;
        text-decoration: underline;
    }
    &:hover {
        color: $color-grey;
    }
}
</style>
