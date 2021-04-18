<template>
    <div class="side-menu">
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

</style>
