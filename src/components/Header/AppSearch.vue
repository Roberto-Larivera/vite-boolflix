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
    <form action="" @submit.prevent="$emit('search')">
      <div class="input-group">
        <input class="form-control" type="search" name="search" id="input-search" placeholder="Cerca" v-model="store.textSearch">
        <button class="btn btn-danger" type="submit">Cerca</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>
