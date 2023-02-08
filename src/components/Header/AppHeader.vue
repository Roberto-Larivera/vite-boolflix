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
      this.getSearchApi()
      this.getSearchApiTv()
    },
    getSearchApi() {
      console.log('sono dentro', this.store.textSearch)
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '215df58ae2869f4519de0d1f0963b234',
            query: this.store.textSearch,
            language: 'it'
          }
        })
        .then((response) => {
          this.store.searchListMovie = response.data.results;
          console.log(this.store.searchListMovie)
        })
        .catch((error) => {
          console.log('error', error)
          //this.store.loadingTime = false
          this.store.searchListMovie = []
          //this.getCharacters()
        });
    },
    getSearchApiTv() {
      console.log('sono dentro', this.store.textSearch)
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '215df58ae2869f4519de0d1f0963b234',
            query: this.store.textSearch,
            language: 'it'
          }
        })
        .then((response) => {
          this.store.searchListTv = response.data.results;
          console.log(this.store.searchListTv)
        })
        .catch((error) => {
          console.log('error tv', error)
          //this.store.loadingTime = false
          this.store.searchListTv = []
          //this.getCharacters()
        });
    },
    trasformNumber(number) {
      return Math.round( Math.ceil(number) / 2)
    }
  },

}
</script>

<template>
  <div>
    <AppSearch @search="getCombined" />
    <h2>

      La tua ricerca: {{ store.textSearch }}
    </h2>
    <h2>
      film
    </h2>
    <div v-for="(element, index) in this.store.searchListMovie">
      <ul>
        <li>
          {{ index }}: {{ element.title }}
        </li>
        <li>
          {{ index }}: {{ element.original_title }}
        </li>
        <li v-if="element.poster_path != null">
          {{ index }}: <img :src="`http://image.tmdb.org/t/p/w342/${element.poster_path}`"
            :alt="element.original_title">
        </li>
        <li>
          {{ index }}: {{ element.original_language }}
          <span :class="`fi fi-${element.original_language}`"></span>
        </li>
        <li>
          {{ index }}: {{ element.vote_average }}
          {{ index }}: {{ trasformNumber(element.vote_average) }}
          <span>
            <font-awesome-icon :icon="['fas', 'star']" v-for="n in trasformNumber(element.vote_average)"/>
            <font-awesome-icon :icon="['far', 'star']" v-for="n in (5 - trasformNumber(element.vote_average))"/>
            <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->


          </span>

        </li>
      </ul>
    </div>
    <h2>
      serie tv
    </h2>
    <div v-for="(element, index) in this.store.searchListTv">
      <ul>
        <li>
          {{ index }}: {{ element.name }}
        </li>
        <li>
          {{ index }}: {{ element.original_name }}
        </li>
        <li v-if="element.poster_path != null">
          {{ index }}: <img :src="`http://image.tmdb.org/t/p/w342/${element.poster_path}`" :alt="element.original_name">
        </li>
        <li>
          {{ index }}: {{ element.original_language }}
          <span :class="`fi fi-${element.original_language}`"></span>
        </li>
        <li>
          {{ index }}: {{ element.vote_average }}
          {{ index }}: {{ trasformNumber(element.vote_average) }}
          <font-awesome-icon :icon="['far', 'star']" />
          <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
