<template>
  <div class="heading__logo">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-dengpao"></use>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style lang="scss" scoped>

</style>
