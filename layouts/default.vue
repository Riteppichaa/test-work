<template>
    <div>
        <div>
            <Header/>
        </div>
        <div class="container page">

            <div class="content-left">
                <div class="heading">
                    <h1>Каталог</h1>
                </div>
                <SideMenu/>
            </div>


            <Nuxt class="page-content"/>

        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.page {
    display: flex;
    justify-content: space-between;

    .content-left {
        width: 161px;


        .heading h1 {
            color: $color-black;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 41px;
            margin-top: 32px;
            margin-bottom: 24px;
        }
    }

    .page-content {
        width: 100%;
    }
}

</style>
