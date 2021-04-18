<template>
    <div class="side-menu">
        <h1 class="heading">Каталог</h1>
        <div class="catalog-item-container">
            <SideMenuLink :active="true">Рюкзаки</SideMenuLink>
            <SideMenuLink :active="false">Футболки</SideMenuLink>
            <SideMenuLink :active="false">Рубашки</SideMenuLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideMenu"
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.side-menu {
    .heading {
        color: $color-black;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 24px;
    }
}

.catalog-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 161px;
    height: 95px;
}
</style>
