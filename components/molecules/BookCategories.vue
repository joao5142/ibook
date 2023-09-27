<template>
  <div class="book-categories">
    <Chip
      v-for="(category, index) in $book.volumeInfo.categories"
      :key="'categories' + index"
      :text="category"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style scoped lang="scss">
.book-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
