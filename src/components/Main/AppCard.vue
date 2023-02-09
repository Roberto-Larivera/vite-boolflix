<script>
export default {
  name: 'AppCard',
  data() {
    return {

    }
  },
  props: {
    cardTitle: {
      type: String,
      default: 'Hei card!'
    },
    cardOriginalTitle: {
      type: String,
      default: 'Hei card original!'
    },
    cardPosterPath: {
      type: String,
      default: '...'
    },
    cardOriginalLanguage: {
      type: String,
      default: '...'
    },
    cardVoteAverage: {
      type: Number,
      default: 0
    },
    cardFlag: {
      type: String,
      default: '...'
    },
    cardOverview: {
      type: String,
      default: '...'
    },
  },


}
</script>

<template>
  <div class="card w-100 text-light border border-0">
    <img class="card-img w-100 h-100 obj-fit" :src="`http://image.tmdb.org/t/p/w342/${cardPosterPath}`"
      :alt="cardOriginalTitle" v-if="cardPosterPath != null">
    <!-- <img class="card-img w-100 h-100 obj-fit" src="https://via.placeholder.com/342X500.png/fff000/fff000" :alt="cardOriginalTitle" v-else> -->
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
</template>

<style lang="scss" scoped>
.card {
  overflow-y: hidden;
  cursor: pointer;

  h5 {
    text-shadow: 0px 0px 45px 22px #000000;
  }

  .card-img-overlay{
    overflow-y: auto;
  }
  &:hover .card-img-overlay {
    display: block !important;
  }

  .obj-fit {
    object-fit: cover;
  }
}
</style>
