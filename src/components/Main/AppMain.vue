<script>
import { store } from '../../store.js';
import AppCard from './AppCard.vue';
import LoadingPlaceholder from './LoadingPlaceholder.vue';
import AppRowCard from './AppRowCard.vue';
import AppCardInfo from './AppCardInfo.vue';


export default {
  name: 'AppMain',
  components: {
    AppCard,
    LoadingPlaceholder,
    AppRowCard,
    AppCardInfo,
  },
  data() {
    return {
      store,
    }
  },

}
</script>

<template>
  <main>
    <div class="container">
      <AppRowCard 
      :rowName="'Lista Film'" 
      :rowListType="store.searchListMovie"
      :rowType="'movie'"
      />
      <AppRowCard 
      :rowName="'Lista Serie Tv'" 
      :rowListType="store.searchListTv"
      :rowType="'tv'"
      />
      
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
