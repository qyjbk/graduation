<template>
    <div class="card" ref="active" @click="doSomething">
        <div class="card__name">
            <h2>{{ card.name }}</h2>
        </div>
        <div class="card__picbox">
            <img class="card__picbox__pic" :src="card.imgSrc" alt="电脑照片">
        </div>
        <CardPrice :price="card.price || '?'" btnText="+"></CardPrice>
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

import CardPrice from './CardPrice.vue';

const $router = useRouter()

const active = ref({})
const props = defineProps(['card', 'animationOtherCard', 'changeActiveItem', 'index'])
const card = props.card
// 激活card的选中状态
const activeFunc = () => {
    active.value.classList.add('active')
    // console.log('id', card.id)
    return props.index
}
// 取消激活card的选中状态
const unActiveFunc = () => {
    active.value.classList.remove('active')
    return props.index
}

// card移出屏幕动画
const animationCardMoveVPLeft = () => {
    gsap.to(active.value, { duration: 0.5, ease: "power1.out", x: '-100vw', })
}
const animationCardMoveVPRight = () => {
    gsap.to(active.value, { duration: 0.5, ease: "power1.out", x: '100vw', })
}

const doSomething = () => {
    // 获取盒子在视口的位置
    const boxRect = active.value.getBoundingClientRect();
    // console.log("Box position:", boxRect.top, boxRect.left);
    const xw = boxRect.left - 0.05 * window.innerWidth;
    gsap.to(active.value, { duration: 0.5, width: '30vw', height: '100vh', scale: 1.1, ease: "power1.out", x: -xw, })
    // 调用父盒子的函数，用于触发激活元素的移出事件
    props.animationOtherCard(props.index)
    setTimeout( () => {
        $router.push({ path: '/detail' })
    }, 1000)
    // 带查询参数，结果是 /register?plan=private
    // router.push({ path: '/register', query: { plan: 'private' } })
}
onMounted(() => {
    active.value.addEventListener('mouseover', function () {
        props.changeActiveItem(card.id)
        active.value.classList.add('active')
    });
})

// 导出供父组件ref使用
defineExpose({ activeFunc, unActiveFunc, animationCardMoveVPLeft, animationCardMoveVPRight })
</script>

<style lang="scss">
.card {
    width: 20%;
    height: 80%;
    color: var(--color-text-white);

    transition: all 0.8s;

    &:hover {
        cursor: pointer;
    }

    &__name {
        margin-top: 6rem;
        margin-left: 7rem;
        margin-bottom: 2rem;

        h2 {
            font-size: 2.2rem;
            font-weight: 100;
        }
    }

    &__picbox {
        transition: all 0.8s;
        margin: 0;
        width: 85%;
        height: 50%;
        margin-left: 1rem;

        &__pic {
            width: 100%;
            height: 100%;
        }
    }


}

.active {
    height: 100%;
    border-radius: 3rem 3rem 0 0;
    background-color: var(--color-card);

    .card__picbox {
        width: 110%;
        height: 55%;
    }

    .card__bottom__price__des {
        color: rgb(129, 128, 159);
    }

    .card__bottom__link {
        background-color: rgb(236, 97, 89);
    }
}
</style>