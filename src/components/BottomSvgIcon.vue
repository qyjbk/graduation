<template>
    <div class="bottomSvg__logo" ref="bottomSvg__logo">
        <a href="#" class="bottomSvg__logo__link"><span class="iconfont icon-youjian"></span></a>
        <a href="https://github.com/qyjbk/graduation" class="bottomSvg__logo__link"><span class="iconfont icon-github"></span></a>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

import { useRoute } from 'vue-router'
const route = useRoute();

const bottomSvg__logo = ref({});

const animateIconToWhite = () => {
    gsap.to(bottomSvg__logo.value, { delay: 0.3, duration: 1, color: 'white', ease: 'power2.inOut' });
}

onMounted( () => {
    if (route.name === 'shoppingcart') {
        bottomSvg__logo.value.style.color = 'white';
    }
})

defineExpose({ animateIconToWhite })

</script>
  
<style lang="scss" scoped>
.bottomSvg__logo {
    position: fixed;
    bottom: 7rem;
    right: 7rem;
    color: #000;

    &__link {

        &:link,
        &:visited {
            color: inherit;
            text-decoration: none;
            margin-left: 1rem;
        }

        .iconfont {
            font-size: 2rem;
        }
    }
}
</style>
  