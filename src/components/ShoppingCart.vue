<template>
    <section class="shoppingCart__page">
        <section class="shoppingCart__page__leftBox">
            <svg class="icon leftBox__logo" aria-hidden="true">
                <use xlink:href="#icon-gouwuche-xuanzhong"></use>
            </svg>
            <div class="leftBox__statusText">
                <h2>已添加至购物车</h2>
            </div>
            <div class="leftBox__btnBox">
                <a class="leftBox__btnBox__backToBrowse" href="#" @click="$router.push({path: '/detail'})">继续浏览</a>
                <button class="leftBox__btnBox__buyNow"><span
                        class="leftBox__btnBox__buyNow__text">立即下单</span>&rarr;</button>
            </div>
            <div class="leftBox__accessories">
                <h3 class="leftBox__accessories__title">附件</h3>
                <div class="leftBox__accessories__flexBox">
                    <div class="leftBox__accessories__item">
                        <img src="../assets/imgs/assemble.jpg" alt="组装机图片" class="leftBox__accessories__img">
                        <p class="leftBox__accessories__text">组装发货</p>
                        <div class="leftBox__accessories__price">
                            <p class="leftBox__accessories__price__text">￥99</p>
                            <button class="leftBox__accessories__price__btn">+</button>
                        </div>
                    </div>
                    <div class="leftBox__accessories__item">
                        <img src="../assets/imgs/system.jpg" alt="win11系统图片" class="leftBox__accessories__img">
                        <p class="leftBox__accessories__text">预装系统</p>
                        <div class="leftBox__accessories__price">
                            <p class="leftBox__accessories__price__text">￥69</p>
                            <button class="leftBox__accessories__price__btn">+</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section class="shoppingCart__page__rightBox"></section>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const $router = useRouter();
</script>

<style lang="scss" scoped>
.shoppingCart__page {
    user-select: none;

    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &__leftBox {
        width: 37.5%;
        overflow: hidden;
        padding: var(--margin-detail-top) 0 0 var(--margin-title-left);
        margin-right: 25%;
    }

    &__rightBox {
        height: 100%;
        width: 37.5%;
        background-color: var(--color-card);
        padding-top: var(--margin-detail-top);
        font-size: 2.2rem;
        color: white;

    }
}

//   width: 1em;
//   height: 1em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
.leftBox {
    &__logo {
        width: 4.2rem;
        height: 4.2rem;
    }

    &__statusText {
        margin-top: var(--margin-item-top);
        font-size: 3.8rem;
        letter-spacing: .5rem;
    }

    &__btnBox {
        // display: flex;
        margin-top: var(--margin-item-top);
        font-size: 2rem;

        &__backToBrowse {
            margin-right: 2rem;
            // display: block;
            cursor: pointer;
            padding: 2.5rem 3rem;
            color: var(--color-text-black);
            text-decoration: none;
            border: var(--border-btn-gray);
            border-radius: 1rem;
        }

        &__buyNow {
            cursor: pointer;
            font-size: inherit;
            font-family: inherit;
            background-color: rgb(236, 97, 89);
            border: none;
            border-radius: 1rem;
            padding: 2.5rem 3rem;
            color: var(--color-text-white);
            border: var(--border-btn-gray);

            &__text {
                margin-right: var(--margin-btn-textToIcon);
            }
        }
    }

    &__accessories {
        margin-top: var(--margin-item-top);
        &__title {
            font-size: 2.5rem;
        }

        &__flexBox {
            margin-top: 2rem;
            display: flex;
            gap: 2rem;
        }

        &__img {
            width: 9rem;
            height: 9rem;
            object-fit: cover;
            object-position: center;
        }

        &__text {
            font-size: 1.6rem;
            display: block;
            margin-top: .5rem;
        }

        &__price {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__text {
                font-size: 2rem;
                // letter-spacing: -0.3rem;
            }

            &__btn {
                width: 3rem;
                height: 3rem;
                border: var(--border-btn-gray);
                border-radius: .5rem;
                background-color: #fff;
            }
        }
    }
}
</style>