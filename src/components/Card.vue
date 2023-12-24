<template>
    <div class="card" ref="active">
        <div class="card__name">
            <h2>{{ card.name }}</h2>
        </div>
        <div class="card__picbox">
            <img class="card__picbox__pic" src="../assets/imgs/cp1.png" alt="电脑照片">
        </div>
        <div class="card__bottom">
            <div class="card__bottom__price">
                <div class="card__bottom__price__des">Price</div>
                <div class="card__bottom__price__num">￥{{ card.price }}</div>
            </div>
            <a href="#" class="card__bottom__link">+</a>
        </div>

    </div>
</template>

<script setup>
import { defineProps, defineExpose, ref, onMounted } from 'vue';
const active = ref({})
const props = defineProps(['card', 'changeActiveItem'])
const card = props.card
// 激活card的选中状态
const activeFunc = () => {
    active.value.classList.add('active')
    return card.id
}
// 取消激活card的选中状态
const unActiveFunc = () => {
    active.value.classList.remove('active')
    return card.id
}
onMounted(() => {
    active.value.addEventListener('mouseover', function () {
        props.changeActiveItem(card.id)
        active.value.classList.add('active')
    });
})

defineExpose({ activeFunc, unActiveFunc })
</script>

<style lang="scss" scoped>
.card {
    width: 20%;
    height: 80%;
    color: var(--color-text-white);

    transition: all 0.8s;

    // transform-origin: center;
    // &:hover {
    //     height: 100%;
    //     border-radius: 3rem 3rem 0 0;
    //     background-color: rgb(71, 79, 113);
    // }

    // &:hover &__picbox {
    //     width: 110%;
    //     height: 55%;
    // }

    // &:hover &__bottom__price__des {
    //     color: rgb(129, 128, 159);
    // }

    // &:hover &__bottom__link {
    //     background-color: rgb(236, 97, 89);
    // }
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

    &__bottom {
        margin-top: 2rem;
        margin-left: 7rem;
        display: flex;

        &__price {
            margin-right: 4rem;

            &__des {
                transform: all 1s;
                font-size: 1.4rem;
            }

            &__num {
                font-size: 2rem;
            }
        }

        &__link {
            transition: all 0.8s;

            &:link,
            &:visited {
                display: block;
                width: 6rem;
                height: 6rem;
                background-color: var(--color-text-white);
                text-align: center;
                line-height: 6rem;
                border-radius: 1rem;
                font-size: 3rem;
                font-weight: 100;
                color: var(--color-text-white);
                text-decoration: none;
            }

            &:hover,
            &:active {
                transform: scale(.9);
            }
        }
    }
}

.active {
    height: 100%;
    border-radius: 3rem 3rem 0 0;
    background-color: rgb(71, 79, 113);

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
}</style>