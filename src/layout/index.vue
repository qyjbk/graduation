<template>
    <section class="heading">
        <Heading></Heading>
    </section>
    <router-view></router-view>
    <BottomSvgIcon></BottomSvgIcon>
</template>

<script setup>
import Heading from '@/components/Heading.vue'
import MainContent from '@/components/MainContent.vue'
import BottomSvgIcon from '@/components/BottomSvgIcon.vue'

</script>

<style lang="scss" scoped>


</style>