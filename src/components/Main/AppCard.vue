<script>
import AppCardInfo from './AppCardInfo.vue';
export default {
  name: 'AppCard',
  components: {
    AppCardInfo,
  },
  data() {
    return {
      truncatedTextVar: true
    }
  },
  props: {
    cardElement: Object,
  },
  methods: {
    truncatedText() {
      let text = this.cardElement.overview
      return text.slice(0, 20) + '...'
    }
  },
  computed: {
    checkFlag() {
      let lang = this.cardElement.original_language
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
    },
    trasformNumber() {
      let number = this.cardElement.vote_average
      return Math.round(Math.ceil(number) / 2)
    },
    
  }


}
</script>

<template>
  <div class="card w-100 text-light border border-0">
    <!-- IMG  -->
    <div class="h-100 w-100" v-if="cardElement.poster_path != null">
      <img class="card-img w-100 h-100 obj-fit" :src="`http://image.tmdb.org/t/p/w342/${cardElement.poster_path}`"
        :alt="cardElement.original_title" v-if="cardElement.original_title">
      <img class="card-img w-100 h-100 obj-fit" :src="`http://image.tmdb.org/t/p/w342/${cardElement.poster_path}`"
        :alt="cardElement.original_name" v-else-if="cardElement.original_name">
    </div>
    <div class="w-100 h-100 bg-dark" v-else></div>
    <!-- \IMG  -->
    <div v-if="cardElement.poster_path == null">
      <h5 class="card-title text-center position-absolute top-50 start-50 translate-middle" v-if="cardElement.title">
        {{ cardElement.title }}
      </h5>
      <h5 class="card-title text-center position-absolute top-50 start-50 translate-middle"
        v-else-if="cardElement.name">
        {{ cardElement.name }}
      </h5>

    </div>

    <div class="card-img-overlay d-none bg-dark bg-opacity-50">
      <h5 class="card-title text-center " v-if="cardElement.poster_path != null">{{ cardElement.title }}</h5>
      <div v-if="cardElement.title != cardElement.original_title">
        <h6 class="card-title text-center" v-if="cardElement.title">"{{ cardElement.original_title }}"</h6>
        <h6 class="card-title text-center" v-else-if="cardElement.name">"{{ cardElement.original_name }}"</h6>
      </div>
      <p class="card-text">Lingua: <span :class="`fi fi-${checkFlag}`"></span></p>
      <p class="card-text "> Voto:
        <span class="text-warning">
          <font-awesome-icon :icon="['fas', 'star']" v-for="n in trasformNumber" />
          <font-awesome-icon :icon="['far', 'star']" v-for="n in (5 - trasformNumber)" />
        </span>
      </p>
      <p class="card-text mb-1" v-if="cardElement.overview"><span class="fw-bold">Descrizione:</span></p>
      <!-- OVERVIEW  -->
      <p class="card-text card_text-over" v-if="cardElement.overview && truncatedTextVar == true">{{ truncatedText() }}
        <a class="mytextdanger" href="#nogo" @click.prevent="truncatedTextVar = false">Vedi di più</a>
      </p>
      <p class="card-text card_text-over" v-if="cardElement.overview && truncatedTextVar == false">{{ cardElement.overview }}
        <a class="mytextdanger" href="#nogo" @click.prevent="truncatedTextVar = true">Vedi di meno</a>
      </p>
   
    </div>
  </div>
</template>

<!-- <template>
    <div class="card w-100 text-light border border-0">
      <img class="card-img w-100 h-100 obj-fit" :src="`http://image.tmdb.org/t/p/w342/${cardPosterPath}`"
        :alt="cardOriginalTitle" v-if="cardPosterPath != null">
      <div class="w-100 h-100 bg-dark" v-else></div>
      <h5 class="card-title text-center position-absolute top-50 start-50 translate-middle" v-if="cardPosterPath == null">{{ cardTitle }}</h5>
      <div class="card-img-overlay d-none bg-danger ">
        <h5 class="card-title text-center " v-if="cardPosterPath != null">{{ cardTitle }}</h5>
        <h6 class="card-title text-center" v-if="cardTitle != cardOriginalTitle">"{{ cardOriginalTitle }}"</h6>
        <p class="card-text">Lingua: <span :class="`fi fi-${cardFlag}`"></span></p>
        <p class="card-text "> Voto:
          <span class="text-warning">
            <font-awesome-icon  :icon="['fas', 'star']" v-for="n in cardVoteAverage" />
            <font-awesome-icon :icon="['far', 'star']" v-for="n in (5 - cardVoteAverage)" />
          </span>
        </p>
        <p class="card-text" v-if="cardOverview"><span class="fw-bold">Descrizione:</span> <br> {{ cardOverview }}</p>
      </div>
    </div>
</template> -->

<style lang="scss" scoped>
.card {
  overflow-y: hidden;
  cursor: pointer;


  h5 {
    text-shadow: 0px 0px 45px 22px #000000;
  }

  .card-img-overlay {
    overflow-y: auto;
  }

  &:hover {
    .card-img-overlay {
      display: block !important;
    }
  }
  .card_text-over a {
    text-decoration: none;
  }
  .obj-fit {
    object-fit: cover;
  }
}
</style>
