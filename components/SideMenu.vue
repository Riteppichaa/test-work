<template>
    <div class="side-menu">
        <SideMenuLink
            v-for="link in menuItems"
            :active="$route.params.id == link.id"
            :link="'/catalog/' + link.id">
            {{ link.name }}
        </SideMenuLink>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "SideMenu",
    mounted() {
        this.getMenu()
        console.log(this.$route.params.id)
    },
    data() {
        return {
            links: []
        }
    },
    computed: mapGetters(['menuItems']),
    methods: {
        ...mapActions(['getMenu'])

    }
}
</script>

<style lang="scss">

</style>
