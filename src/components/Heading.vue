<template>
  <div class="heading__left">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-diannao"></use>
    </svg>
    <p class="heading__left__text">DIYPlayer</p>
  </div>

  <div class="heading__right">
    <p>user</p>
    <el-popover placement="top-start" title="EMail：" :width="200" trigger="hover" content="kkshen15@gmail.com">
      <template #reference>
        <a href="#" class="heading__right__link">联系我</a>
      </template>
    </el-popover>
    <a href="#" class="heading__right__link">
      <svg class="icon heading__right__icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
    </a>
    <a href="#" class="heading__right__link">关于网页</a>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.heading__left {
  display: flex;
  align-items: center;
  margin: 0;
  gap: 1rem;
  line-height: 2.5rem;
  font-size: 1.6rem;
}

.heading__right {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.5rem;
  font-weight: 100;
  margin: 0;

  &>* {
    margin-left: 3rem;
  }
  &:last-child {
    margin-right: var(--margin-title-left);
  }

  &__icon {
    width: 4rem;
    height: 3rem;
  }

  &__link {
    &:link,
    &:visited {
      display: block;
      text-decoration: none;
      color: var(--color-text);
    }
  }
}
</style>
