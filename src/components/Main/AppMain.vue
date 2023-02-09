<script>
import { store } from '../../store.js';
import AppCard from './AppCard.vue';


export default {
  name: 'AppMain',
  components:{
    AppCard,
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    trasformNumber(number) {
      return Math.round( Math.ceil(number) / 2)
    },
    checkFlag(lang){
      switch (lang){

        case 'en':
          lang = 'gb'
          break;

        case 'hy':
          lang = 'am'
          break;
        case 'zh':
          lang = 'de'
          break;
        
          // case 'en':
          // break;

      }
      console.log(lang,'lang')
      const flag = lang
      console.log(flag,'flag')
      return flag
    }
  },
  
}
</script>

<template>
  <div>
    <h2>
      film
    </h2>
    <div class="card" v-for="(element, index) in this.store.searchListMovie">
      <AppCard
        :cardTitle="element.title "
        :cardOriginalTitle=" element.original_title"
        :cardPosterPath=" element.poster_path"
        :cardOriginalLanguage=" element.original_language "
        :cardFlag=" checkFlag(element.original_language) "
        :cardVoteAverage="trasformNumber(element.vote_average)"
      />
    </div>

    <h2>
      tv
    </h2>
    <div class="card" v-for="(element, index) in this.store.searchListTv">
      <AppCard
        :cardTitle="element.name "
        :cardOriginalTitle=" element.original_name"
        :cardPosterPath=" element.poster_path"
        :cardOriginalLanguage=" element.original_language "
        :cardFlag=" checkFlag(element.original_language) "
        :cardVoteAverage="trasformNumber(element.vote_average)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
