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
  computed:{
    
  }

}
</script>

<template>
  <header>
    <div class="container">
      <div class="row row-cols-2  align-items-center p-3">
        <div class="col d-flex align-items-center ">
          <h1>
            Boolflix
          </h1>
        </div>
        <div class="col d-flex align-items-center justify-content-end">
          <AppSearch @search="getCombined" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  background-color: black ;
  h1{
    font-weight: bold;
    color: red;
  }
}
</style>
