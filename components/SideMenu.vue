<template>
    <div class="side-menu">
        <SideMenuLink :active="true">Рюкзаки</SideMenuLink>
        <SideMenuLink :active="false">Футболки</SideMenuLink>
        <SideMenuLink :active="false">Рубашки</SideMenuLink>
    </div>
</template>

<script>
export default {
    name: "SideMenu"
}
</script>

<style lang="scss">

</style>
