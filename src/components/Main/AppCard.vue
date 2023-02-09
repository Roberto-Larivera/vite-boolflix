<script>
export default {
  name: 'AppCard',
  data() {
    return {

    }
  },
  props : {
    cardTitle :{
      type: String,
      default: 'Hei card!'
    },
    cardOriginalTitle :{
      type: String,
      default: 'Hei card original!'
    },
    cardPosterPath :{
      type: String,
      default: '...'
    },
    cardOriginalLanguage :{
      type: String,
      default: '...'
    },
    cardVoteAverage :{
      type: Number,
      default: 0
    },
    cardFlag:{
      type: String,
      default: '...'
    }
  },


}
</script>

<template>
  <div>

    <div>
      <ul>
        <li>
          {{ cardTitle }}
        </li>
        <li>
          {{ cardOriginalTitle }}
        </li>
        <li v-if="cardPosterPath != null">
          <img :src="`http://image.tmdb.org/t/p/w342/${cardPosterPath}`"
            :alt="cardOriginalTitle">
        </li>
        <li v-else>
          <img src="https://via.placeholder.com/342.png/fff000/fff000"
            :alt="cardOriginalTitle">
        </li>
        <li>
          {{ cardOriginalLanguage }}
          <span :class="`fi fi-${cardFlag}`"></span>
        </li>
        <li>
          {{ cardVoteAverage }}
          <span>
            <font-awesome-icon :icon="['fas', 'star']" v-for="n in cardVoteAverage" />
            <font-awesome-icon :icon="['far', 'star']" v-for="n in (5 - cardVoteAverage)" />
            <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->
          </span>

        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
