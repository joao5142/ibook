<template>
  <div class="book-page-container">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.book-page-container {
  padding: 3rem 2rem;

  border: 1px solid #c7c7c7c7;

  height: 100%;

  overflow-y: auto;
}
</style>
