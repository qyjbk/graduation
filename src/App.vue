<script setup>
import Heading from './components/Heading.vue'
import MainContent from './components/MainContent.vue'
</script>

<template>
  <section class="heading">
    <Heading></Heading>
  </section>
  <section class="main">
    <h1 class="main__title">推荐电脑搭配</h1>
    <MainContent></MainContent>
  </section>
</template>

<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}
.main {
  &__title {
    margin-top: 0;
    font-weight: 200;
    font-size: 2.2rem;
    margin-left: 1.5rem;
    letter-spacing: .2rem;
  }
}

</style>
