<script>
import { store } from '../../store.js';
import AppCard from './AppCard.vue';
import LoadingPlaceholder from './LoadingPlaceholder.vue';
import AppRowCard from './AppRowCard.vue';


export default {
  name: 'AppMain',
  components: {
    AppCard,
    LoadingPlaceholder,
    AppRowCard,
  },
  data() {
    return {
      store,
    }
  },

}
</script>

<template>
  <main>
    <div class="container">
      <AppRowCard 
      :rowName="'Lista Film'" 
      :rowListType="store.searchListMovie"
      :rowType="'movie'"
      />
      <AppRowCard 
      :rowName="'Lista Serie Tv'" 
      :rowListType="store.searchListTv"
      :rowType="'tv'"
      />
      
      <!-- <div class="row row-cols-5 p-5 g-5">
        <div class="col-12">
            <h2 class="text-light">
                Lista Film
            </h2>
        </div>
        <template v-if=(store.loadingTime)>
            <div class="col d-flex align-items-stretch">
                <LoadingPlaceholder />
            </div>
        </template>
        <template v-else>
            <div class="col d-flex align-items-stretch" v-for="(element, index) in this.store.searchListMovie">
                <AppCard :cardTitle="element.title" :cardOriginalTitle="element.original_title"
                    :cardPosterPath="element.poster_path" :cardOriginalLanguage="element.original_language"
                    :cardFlag="checkFlag(element.original_language)"
                    :cardVoteAverage="trasformNumber(element.vote_average)" :cardOverview="element.overview" />
            </div>
        </template>
    </div> -->
      
    <!-- <div class="row row-cols-5 p-5 g-5">
        <div class="col-12">
          <h2 class="text-light">
            Lista SerieTv
          </h2>
        </div>
        <template v-if=(store.loadingTime)>
          <div class="col d-flex align-items-stretch">
            <LoadingPlaceholder />
          </div>
        </template>
        <template v-else>
          <div class="col d-flex align-items-stretch" v-for="(element, index) in this.store.searchListTv">
            <AppCard :cardTitle="element.name" :cardOriginalTitle="element.original_name"
              :cardPosterPath="element.poster_path" :cardOriginalLanguage="element.original_language"
              :cardFlag="checkFlag(element.original_language)" :cardVoteAverage="trasformNumber(element.vote_average)"
              :cardOverview="element.overview" />
          </div>
        </template>
      </div> -->

    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
