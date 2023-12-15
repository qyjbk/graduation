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
  margin: var(--margin-title-top) 0rem 2rem var(--margin-title-left);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  height: 2rem;
}
.main {
  height: calc(100vh - 12rem);
  &__title {
    margin-top: var(--margin-title-top);
    margin-bottom: var(--margin-title-top);
    font-weight: 400;
    font-size: 2.5rem;
    margin-left: var(--margin-title-left);
    letter-spacing: .2rem;
    line-height: 3rem;
  }
}

</style>
