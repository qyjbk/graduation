<template>
    <div class="bottomSvg__logo">
        <a href="#" class="bottomSvg__logo__link"><span class="iconfont icon-youjian"></span></a>
        <a href="https://github.com/qyjbk/graduation" class="bottomSvg__logo__link"><span class="iconfont icon-github"></span></a>
    </div>
</template>
  
<script setup>

</script>
  
<style lang="scss" scoped>
.bottomSvg__logo {
    position: fixed;
    bottom: 7rem;
    right: 7rem;

    &__link {

        &:link,
        &:visited {
            color: #000;
            text-decoration: none;
            margin-left: 1rem;
        }

        .iconfont {
            font-size: 2rem;
        }
    }
}
</style>
  