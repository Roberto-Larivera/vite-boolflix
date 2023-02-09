<script>
import { store } from '../../store.js';
import AppCard from './AppCard.vue';


export default {
  name: 'AppMain',
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    }
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
      console.log(lang, 'lang')
      const flag = lang
      console.log(flag, 'flag')
      return flag
    }
  },

}
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-5">
        <div class="col d-flex align-items-stretch" v-for="(element, index) in this.store.searchListMovie">
          <AppCard :cardTitle="element.title" :cardOriginalTitle="element.original_title"
            :cardPosterPath="element.poster_path" :cardOriginalLanguage="element.original_language"
            :cardFlag="checkFlag(element.original_language)"
            :cardVoteAverage="trasformNumber(element.vote_average)" />
        </div>
      </div>
      <div class="row row-cols-5">
        <div class="col d-flex align-items-stretch" v-for="(element, index) in this.store.searchListTv">
          <AppCard :cardTitle="element.name" :cardOriginalTitle="element.original_name"
            :cardPosterPath="element.poster_path" :cardOriginalLanguage="element.original_language"
            :cardFlag="checkFlag(element.original_language)"
            :cardVoteAverage="trasformNumber(element.vote_average)" />
        </div>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
