<template>
  <div class="book-page">
    <div class="book-text">
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
      <div class="book-paragraph"></div>
    </div>
    <div class="book-page-num">{{ page }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    page: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.book-page {
  width: 100%;
  height: 100%;
  padding: 1rem;

  border: 1px solid #c7c7c7c7;
}
.book-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.book-paragraph {
  width: 100%;
  height: 10px;
  background: color('light', 'darkest');
}

.book-page-num {
  text-align: center;
  font-size: 1.1rem;

  margin-top: 1.2rem;
}
</style>
