<template>
    <Heading ref="heading"></Heading>
    <router-view></router-view>
    <BottomSvgIcon></BottomSvgIcon>
</template>

<script setup>
import Heading from '@/components/Heading.vue'
import BottomSvgIcon from '@/components/BottomSvgIcon.vue'

import { ref, provide } from 'vue'

const heading = ref({})

function triggerSelectAnimation() {
    console.log(heading)
    heading.value.animateLeftToWhite()
}

provide('animationFunc', triggerSelectAnimation)

</script>

<style lang="scss" scoped></style>