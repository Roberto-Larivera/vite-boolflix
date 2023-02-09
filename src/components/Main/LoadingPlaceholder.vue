<script>
export default {
  name: 'LoadingPlaceholder',
  data() {
    return {

    }
  }

}
</script>

<template>
  <div class="card p-2 w-100 bg-dark" aria-hidden="false">
    <div class="card-body text-light">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  //background-color: $color_primary;
}
</style>
