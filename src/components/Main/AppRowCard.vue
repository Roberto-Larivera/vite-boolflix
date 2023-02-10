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
        rowListType : Array,
        rowType : String,
    },
    methods: {
        trasformNumber(number) {
            return Math.round(Math.ceil(number) / 2)
        },
        checkFlag(lang) {
            switch (lang) {

                case 'en':
                    lang = 'gb'
                    break;

                case 'hy':
                    lang = 'am'
                    break;
                case 'zh':
                    lang = 'de'
                    break;

            }
            const flag = lang
            return flag
        }
    },

}
</script>

<template>
    <div class="row row-cols-5 p-5 g-5">
        <div class="col-12">
            <h2 class="text-light" v-if="(store.loadingTime == false && rowListType != '')">
                {{ rowName }}
            </h2>
        </div>
        <template v-if=(store.loadingTime)>
            <div class="col d-flex align-items-stretch">
                <LoadingPlaceholder />
            </div>
        </template>
        <template v-else>
                <div class="col d-flex align-items-stretch" v-for="element in rowListType">
                    <AppCard v-if="rowType == 'movie'"
                        :cardTitle="element.title" 
                        :cardOriginalTitle="element.original_title"  
                        :cardPosterPath="element.poster_path" 
                        :cardOriginalLanguage="element.original_language"
                        :cardFlag="checkFlag(element.original_language)"
                        :cardVoteAverage="trasformNumber(element.vote_average)" 
                        :cardOverview="element.overview" 
                    />
                    <AppCard v-else-if="rowType == 'tv'"
                        :cardTitle="element.name" 
                        :cardOriginalTitle="element.original_name"  
                        :cardPosterPath="element.poster_path" 
                        :cardOriginalLanguage="element.original_language"
                        :cardFlag="checkFlag(element.original_language)"
                        :cardVoteAverage="trasformNumber(element.vote_average)" 
                        :cardOverview="element.overview" 
                    />
                </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>
