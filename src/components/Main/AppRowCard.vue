<script>
import { store } from '../../store';
import LoadingPlaceholder from './LoadingPlaceholder.vue';
import AppCard from './AppCard.vue';

export default {
    name: 'AppRowCard',
    components: {
        LoadingPlaceholder,
        AppCard,

    },
    data() {
        return {
            store,
        }
    },
    props: {
        rowName: {
            type: String,
            Default: 'Name List'
        },
        rowListType:{
            type: Array,
            Default: []
        } ,
        rowType: String,
    },
    methods: {
       
    },

}
</script>

<template>
    <div class="row row-cols-5 p-5 g-1">
        <div class="col-12">
            <h2 class="text-light" v-if="(store.loadingTime == false && rowListType != '')">
                {{ rowName }}
            </h2>
            <h2 class="text-light"
                v-else-if="(store.loadingTime == false && rowListType == ''  && store.bollListMovie == true)">
                Ci dispiace non ci sono risultati nella {{ rowName }} per: <span class="text-danger">{{
                    store.textSearch
                }}</span>
            </h2>
            <h2 class="text-light"
                v-else-if="(store.loadingTime == false && rowListType == ''  && store.bollListTv == true)">
                Ci dispiace non ci sono risultati nella {{ rowName }} per: <span class="text-danger">{{
                    store.textSearch
                }}</span>
            </h2>
        </div>

        <template v-if=(store.loadingTime)>
            <div class="col d-flex align-items-stretch">
                <LoadingPlaceholder />
            </div>
        </template>

        <template v-else>
            <div class="col d-flex align-items-stretch" v-for="element in rowListType">
                <AppCard :cardElement="element" />
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>
