<script>
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
  }
  
}
</script>

<template>
  <div>
    <h2>
      {{ store.textSearch }}
    </h2>
    <AppSearch/>
  </div>
</template>

<style lang="scss" scoped>
</style>
