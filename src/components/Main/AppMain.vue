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
      <AppRowCard :rowName="'Lista Film'" :rowListType="store.searchListMovie" :rowType="'movie'" />
      <AppRowCard :rowName="'Lista Serie Tv'" :rowListType="store.searchListTv" :rowType="'tv'" />

      <div class="row p-5">
        <!-- <div class="col-12" v-if="rowListType == '' && store.textSearch != ''">
          <h4 class="text-light">
            Ci dispiace non ci sono risultati nella lista {{ rowType }} per: <span class="text-danger">{{
              store.textSearch
            }}</span>
          </h4>
        </div> -->
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
