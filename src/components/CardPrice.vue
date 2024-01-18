<template>
    <div class="card__bottom">
        <div class="card__bottom__price">
            <div class="card__bottom__price__des">Price</div>
            <div class="card__bottom__price__num">￥{{ props.price || '????' }}</div>
        </div>
        <a href="#" class="card__bottom__link" ref="btnEle" @click="$router.push({path: '/shoppingcart'})">{{ props.btnText }}</a>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const $router = useRouter();
const btnEle = ref({});

const props = defineProps(['price', 'btnText', 'highlight'])

onMounted( () => {
    if (props.highlight) {
        btnEle.value.style.backgroundColor = 'rgb(236, 97, 89)';
        btnEle.value.style.fontSize = '1.6rem';
        btnEle.value.style.padding = '2rem';
    }
})

</script>

<style lang="scss">
.card__bottom {
    margin-top: 2rem;
    margin-left: 7rem;
    display: flex;
    align-items: center;

    &__price {
        margin-right: 4rem;

        &__des {
            transform: all .8s ease-in-out;
            font-size: 1.4rem;
        }

        &__num {
            font-size: 2rem;
        }
    }

    &__link {
        transform: scale(1);
        transition: transform .8s, background-color .8s;

        &:link,
        &:visited {
            display: block;
            padding: 1.5rem 2rem;
            background-color: var(--color-text-white);
            text-align: center;
            // line-height: 6rem;
            border-radius: 1rem;
            font-size: 3rem;
            font-weight: 100;
            color: var(--color-text-white);
            text-decoration: none;
        }

        &:hover,
        &:active {
            transform: scale(.95);
        }
    }
}
</style>