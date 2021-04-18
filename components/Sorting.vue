<template>
    <div class="sorting">
        <div class="sorting-btn" @click="isListViewed = !isListViewed">
            <div>Сортировать по:
                <span class="expanding-list-text">{{ selectedTypeName }}</span>
            </div>
        </div>
        <div :class="['expanding-list', {'selected': isListViewed}]">
            <div v-for="sortType in sortTypes" @click="selectSort(sortType)">По {{ sortType.name }}</div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Sorting",

    data() {
        return {
            isListViewed: false,
            sortTypes: [
                {
                    name: 'цене',
                    type: 'price'
                },
                {
                    name: 'популярности',
                    type: 'rating'

                }
            ],
            selectedTypeName: 'цене'
        }
    },
    methods: {
        ...mapActions(['sortProducts']),
        selectSort(value) {
            this.selectedTypeName = value.name
            this.isListViewed = false
            this.sortProducts(value.name)
        }
    }
}
</script>

<style lang="scss">
@import "~/styles/config.scss";

.sorting {
    position: relative;

    .sorting-btn {
        cursor: pointer;
        padding-top: 42px;
        display: flex;
        justify-content: flex-end;

        .expanding-list-text {
            color: $color-grey;
        }
    }

    .expanding-list {
        visibility: hidden;
        width: 160px;
        background-color: $color-white;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        padding: 8px 0;
        z-index: 1;

        &.selected {
            visibility: visible;
        }

        div {
            color: $color-grey-light;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            padding: 4px 12px;
            cursor: pointer;

            &:hover {
                background-color: $color-grey-extra-light;
                color: $color-black;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
            }
        }
    }
}
</style>
