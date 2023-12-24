<template>
    <div class="mainContent__flexBox" >
        <Card :card = "card[0]" :changeActiveItem="changeActiveItem" ref="card1"></Card>
        <Card :card = "card[1]" :changeActiveItem="changeActiveItem" ref="card2"></Card>
        <Card :card = "card[2]" :changeActiveItem="changeActiveItem" ref="card3"></Card>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Card from './Card.vue'

// 对每个card标签进行标记
const card1 = ref('card1')
const card2 = ref('card2')
const card3 = ref('card3')

// 用cardObj来存储card标签，利于后续操作
const cardObj = {
    card1,
    card2,
    card3
}

// 对当前激活的card标签进行标记
const activeItem = ref(1)
// 作为props传递给子组件，用于修改父组件记录的当前激活的card标签
function changeActiveItem(id) {
    activeItem.value = id
}

// 获取的card信息
const card = [
    {
        id: 1,
        name: '简朴',
        imgSrc: '../assets/imgs/cp1.png',
        price: '5999',
    },
    {
        id: 2,
        name: '海景房',
        imgSrc: '../assets/imgs/cp1.png',
        price: '15999',
    },
    {
        id: 3,
        name: '机械',
        imgSrc: '../assets/imgs/cp1.png',
        price: '8999',
    },
]

// 监听事件, 使当前激活的card标签失去激活状态
watch(() => activeItem.value, (newVal, oldVal) => {
    cardObj[`card${oldVal}`].value.unActiveFunc()
})

onMounted(() => {
    // 初始化第一个card标签，让其处于激活状态
    card1.value.activeFunc()
})
</script>

<style lang="scss" scoped>

.mainContent__flexBox {
    height: calc(100vh - 20rem);
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 5rem;
}
</style>