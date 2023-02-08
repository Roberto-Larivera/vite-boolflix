<script>
import { store } from '../../store.js';
export default {
  name: 'AppSearch',
  data(){
    return{
      store,
    }
  }
  
}
</script>

<template>
  <div>
    <form action="" @submit.prevent="store.textSearch">
      <input type="search" name="search" id="input-search" placeholder="Search text" v-model="store.textSearch">
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>
