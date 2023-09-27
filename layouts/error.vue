<template>
  <div class="error">
    <img src="@/assets/img/404.svg" alt="404" />
    <p>A pagina que voce está procurando não existe ou foi removida</p>
    <NuxtLink class="btn-back" to="/">Voltar para home</NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  head: {
    bodyAttrs: {
      class: 'reset-body',
    },
  },
})
</script>

<style lang="scss" scoped>
.reset-body {
  padding-bottom: 0 !important;
  margin: 0 !important;
}
.error {
  height: 100vh;

  background: color('dark', 'darkest');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  p {
    font-size: 1.3rem;
    color: white;
  }
}

.btn-back {
  padding: 1rem 2rem;
  background-color: white;

  color: color('dark', 'darkest');
}
</style>
