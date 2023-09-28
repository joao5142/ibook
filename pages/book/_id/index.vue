<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params }) {
    await books.show({ id: params.id })
  },
  head() {
    return {
      title: books.$single.volumeInfo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.volumeInfo.description,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
