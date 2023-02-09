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
    }
  },


}
</script>

<template>
  <div class="card w-100">
    <img class="card-img w-100 h-100 obj-fit" :src="`http://image.tmdb.org/t/p/w342/${cardPosterPath}`" :alt="cardOriginalTitle" v-if="cardPosterPath != null">
    <img class="card-img w-100 h-100 obj-fit" src="https://via.placeholder.com/342X500.png/fff000/fff000" :alt="cardOriginalTitle" v-else>
    <div class="card-img-overlay">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <h5 class="card-title">{{ cardOriginalTitle }}</h5>
      <p class="card-text">{{ cardOriginalLanguage }}</p>
      <span :class="`fi fi-${cardFlag}`"></span>
      <p class="card-text"><small>{{ cardVoteAverage }}</small></p>
      <span>
          <font-awesome-icon :icon="['fas', 'star']" v-for="n in cardVoteAverage" />
          <font-awesome-icon :icon="['far', 'star']" v-for="n in (5 - cardVoteAverage)" />
          <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->
        </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  &:hover.card-img-overlay
  .obj-fit{
    object-fit: cover;
  }
}
</style>
