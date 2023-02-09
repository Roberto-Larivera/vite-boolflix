<script>
import axios, { Axios } from 'axios';
import { store } from '../../store.js';
import AppSearch from './AppSearch.vue';
export default {
  name: 'AppHeader',
  components: {
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCombined() {
      this.getSearchApi('movie')
      this.getSearchApi('tv')
    },
    getSearchApi(modelA) {
      console.log('Testo da ricercare: ', this.store.textSearch)
      axios
        .get('https://api.themoviedb.org/3/search/' + modelA, {
          params: {
            api_key: '215df58ae2869f4519de0d1f0963b234',
            query: this.store.textSearch,
            language: 'it'
          }
        })
        .then((response) => {
          if (modelA == 'movie') {
            this.store.searchListMovie = response.data.results;
            console.log(modelA)
          } else if (modelA == 'tv') {
            this.store.searchListTv = response.data.results;
            console.log(modelA)
          }
          console.log('response ok')
        })
        .catch((error) => {
          if (modelA == 'movie') {
            this.store.searchListMovie = [];
            console.log(modelA)
          } else if (modelA == 'tv') {
            this.store.searchListTv = [];
            console.log(modelA)
          }
          console.log('error', error)
        });
    },
    
  },

}
</script>

<template>
  <div>
    <AppSearch @search="getCombined" />
    <h2>
      La tua ricerca: {{ store.textSearch }}
    </h2>

  </div>
</template>

<style lang="scss" scoped>

</style>
