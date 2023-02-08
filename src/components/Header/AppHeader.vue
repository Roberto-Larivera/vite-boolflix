<script>
import axios, { Axios } from 'axios';
import { store } from '../../store.js';
import AppSearch from './AppSearch.vue';
export default {
  name: 'AppHeader',
  components:{
    AppSearch,
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getSearchApi(){
      console.log('sono dentro', this.store.textSearch)
      axios
        .get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: '215df58ae2869f4519de0d1f0963b234',
            query: this.store.textSearch
          }
        })
        .then((response) => {
          this.store.searchList = response.data.results;
          console.log(this.store.searchList)
        })
    }
  },
  
}
</script>

<template>
  <div>
    <h2>
      La tua ricerca: {{ store.textSearch }}
    </h2>
    <div v-for="(element, index) in this.store.searchList">
      <ul>
        <li>
          {{ index }}: {{ element.title }}
        </li>
        <li>
          {{ index }}: {{ element.original_title }}
        </li>
        <li>
          {{ index }}: {{ element.original_language }}
        </li>
        <li>
          {{ index }}: {{ element.vote_average }}
        </li>
      </ul>
    </div>
    <AppSearch @search="getSearchApi"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
