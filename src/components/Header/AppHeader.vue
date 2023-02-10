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
      if (this.store.textSearch == '') {
        this.store.searchListTv = [];
        this.store.searchListMovie = [];
        this.store.bollListTv = false;
        this.store.bollListMovie = false;

      } else {
        this.store.loadingTime = true
        axios
          .get('https://api.themoviedb.org/3/search/' + modelA, {
            params: {
              api_key: '215df58ae2869f4519de0d1f0963b234',
              query: this.store.textSearch,
              language: 'it'
            }
          })
          .then((response) => {
            console.log('sei fregno')
            if (modelA == 'movie') {
              this.store.searchListMovie = response.data.results;
              console.log(modelA)
              console.log('risposta r', response)
              console.log('risposta', this.store.searchListMovie)
              this.store.bollListMovie = false;
              // if (this.store.searchListMovie == []) {
              //   this.store.bollListMovie = true;
              //   console.log('sei un coglione')
              // }
            } else if (modelA == 'tv') {
              this.store.searchListTv = response.data.results;
              console.log(modelA)
              console.log('risposta r', response)
              console.log('risposta', this.store.searchListTv)
              this.store.bollListTv = false;
              // if (this.store.searchListTv == ['']) {
              //   this.store.bollListTv = true;
              //   console.log('sei un coglione')
              // }
            }

            console.log('response ok')
            this.store.loadingTime = false

          })
          .catch((error) => {
            if (modelA == 'movie') {
              this.store.searchListMovie = [];
              this.store.bollListMovie = true;
              console.log(modelA)
            } else if (modelA == 'tv') {
              this.store.searchListTv = [];
              this.store.bollListTv = true;
              console.log(modelA)
            }

            console.log('error', error)
            this.store.loadingTime = false

          });
      }
    },

  },
  computed: {

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
header {
  background-color: black;

  h1 {
    font-weight: bold;
    color: red;
  }
}
</style>
