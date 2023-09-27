<template>
  <div class="presentation">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      veniam sapiente rem ducimus repellat ullam cum, officia quisquam vitae
      odit ipsum ut accusamus quaerat doloribus. Blanditiis omnis explicabo
      provident sapiente.
    </p>
    <img src="@/assets/img/presentation.svg" alt="Apresentação do ibook" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
