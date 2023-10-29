<template>
  <NuxtLink :to="`/book/${book.id}`" class="book-card"
    ><img
      :src="
        book?.volumeInfo?.imageLinks?.thumbnail ??
        require('@/assets/img/unavailable-cover.jpg')
      "
      alt="Capa do livro"
      loading="lazy"
    />
    <div class="text">
      <h4>{{ book?.volumeInfo.title }}</h4>
      <p>{{ authors }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IBook } from 'models'

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true,
    } as PropOptions<IBook>,
  },

  computed: {
    authors() {
      return this.book?.volumeInfo.authors.join(', ')
    },
  },
})
</script>

<style scoped lang="scss">
.book-card {
  color: inherit;
  display: grid;
  gap: 1.5rem;

  img {
    display: grid;

    width: 100%;
    height: 100%;
    height: 218px;

    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  p {
    margin-top: 5px;
    font-size: 13px;
    color: color('dark');
  }

  @media (max-width: 350px) {
    & {
      max-width: 200px;
      margin: 0 auto;
    }
  }
}
</style>
