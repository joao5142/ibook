<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 1070px;

  @include screen('large', 'infinity') {
    width: 70%;
  }
  @include screen('medium') {
    width: 85%;
  }
  @include screen('small') {
    width: 90%;
  }
}
</style>
