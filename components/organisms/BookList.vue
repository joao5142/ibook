<template>
  <div>
    <div v-if="books" class="book-list">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>

    <div v-else>
      <LoadingComponent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoadingComponent from '../atoms/Loading.vue'

import { books } from '@/store'

export default Vue.extend({
  computed: {
    books() {
      return books.$all
    },
  },
})
</script>

<style scoped lang="scss">
.book-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;

  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 350px) {
    & {
      grid-template-columns: 1fr;

      justify-content: center;
      align-items: center;
    }
  }
}
</style>
