<template>
    <div class="catalog-section">
        <CatalogItemContainer v-for="product in productItems" :item="product"/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "CatalogSection",

    mounted() {
        this.getProducts(this.$route.params.id)
    },
    methods: mapActions(['getProducts']),
    computed: mapGetters(['productItems'])
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.catalog-section {

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px;

    & > * {
        width: calc((100% / 4) - (16px * 3))
    }
}

</style>
