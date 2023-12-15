<template>
    <div class="mainContent__flexBox">
        <Card></Card>
    </div>
</template>

<script setup>
import Card from './Card.vue'
</script>

<style lang="scss" scoped>

.mainContent__flexBox {
    height: calc(100vh - 20rem);
    display: flex;
    justify-content: center;
    align-items: end;
}
</style>