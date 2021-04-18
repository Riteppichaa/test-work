<template>
    <div class="catalog-section">
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
        <CatalogItemContainer/>
    </div>
</template>

<script>
export default {
    name: "CatalogSection"
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
