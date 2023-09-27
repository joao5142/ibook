<template>
  <div class="home-template">
    <PageTitle text="Bem-vindo ao " strong="iBook" />
    <Releases />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.home-template {
  display: grid;
  grid-gap: 4rem;
}
</style>
