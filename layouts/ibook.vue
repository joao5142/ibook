<template>
  <div class="ibook-layout">
    <!-- header -->
    <Header />
    <!-- container -->
    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  grid-gap: 6.75rem;
  .container {
    padding-bottom: 15.75rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
