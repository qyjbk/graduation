<template>
    <section class="main">
        <h1 class="main__title">推荐电脑搭配</h1>
        <div class="mainContent__flexBox">
            <transition>
                <Card :card="card[0]" :changeActiveItem="changeActiveItem" ref="card1" :index="0"
                    :animationOtherCard='animationOtherCard'></Card>
                <Card :card="card[1]" :changeActiveItem="changeActiveItem" ref="card2" :index="1"
                    :animationOtherCard='animationOtherCard'></Card>
                <Card :card="card[2]" :changeActiveItem="changeActiveItem" ref="card3" :index="2"
                    :animationOtherCard='animationOtherCard'></Card>
            </transition>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch, inject } from 'vue';
import Card from './Card.vue';

const triggerSelectAnimation = inject('animationFunc')

// 对每个card标签进行标记
const card1 = ref({})
const card2 = ref({})
const card3 = ref({})

// 用cardObj来存储card标签，利于后续操作
const cardObj = {
    card1,
    card2,
    card3
}

// 对当前激活的card标签进行标记
const activeItem = ref(1)

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

// 让非事件触发者的card标签进行动画
const animationOtherCard = (index) => {
    // 
    for (let i = 0; i < card.length; i++) {
        if (i !== index) {
            // 判断card在触发事件的左右侧，分别触发移出函数
            if (index < i) {
                cardObj[`card${i + 1}`].value.animationCardMoveVPRight()
            } else {
                cardObj[`card${i + 1}`].value.animationCardMoveVPLeft()
            }
        }
    }
    triggerSelectAnimation()
}

// 作为props传递给子组件，用于修改父组件记录的当前激活的card标签
function changeActiveItem(id) {
    activeItem.value = id
}
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
.main {
    height: calc(100vh - 12rem);

    &__title {
        margin-top: calc(2 * var(--margin-title-top));
        margin-bottom: var(--margin-title-top);
        font-weight: 400;
        font-size: 2.5rem;
        margin-left: var(--margin-title-left);
        letter-spacing: .2rem;
        line-height: 3rem;
    }
}

.mainContent__flexBox {
    height: calc(100vh - 14rem);
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 5rem;
}
</style>