<template>
  <div class="heading__left">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-diannao"></use>
    </svg>
    <p class="english">DIYPlayer</p>
  </div>
  <div class="heading__right">
    <user></user>
    <a href="#">联系我</a>
    <a href="#">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-diannao"></use>
      </svg>
    </a>
    <a href="#">关于网页</a>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.heading__left {
  display: flex;
  margin: 3rem 0rem 2rem 1.5rem;
  :not(:first-child){
    margin-left: .5rem;
  }
}
.heading__right {
  justify-self: flex-end;
  justify-content: flex-end;
}
</style>
