<template>
    <section class="detail__page">
        <section class="detail__page__card">
            <section class="card__menu">
                <h2>海景</h2>
                <a href="#" class="menuActive card__menu__link">灯火阑珊</a>
                <a href="#" class="card__menu__link">暗影寂静</a>
            </section>
            <section class="card__main">
                <div class="card__main__left">
                    <a href="#" class="card__main__left__switch">
                        <span class="iconfont icon-kaiji"></span>
                    </a>
                </div>
                <div class="card__main__right">3d模型暂定</div>
            </section>
            <section class="card__footer">
                <CardPrice :price="9999" btnText="添加购物车" :highlight="true"></CardPrice>
            </section>
        </section>
        <section class="detail__page__setting">
            <a href="#" class="setting__btn">&larr;<span class="setting__btn__p">返回</span></a>
            <h2 class="setting__title">随心配</h2>
            <div class="setting__classify setting__sameflexbox" ref="scrollbarBox">
                <img src="../assets/imgs/arrow-left.svg" alt="滑块向左移动" id="classify__prevButton"
                    class="swiper__arrow swiper__arrow__left">
                <swiper :slidesPerView="4" :spaceBetween="25" :navigation="{
                    clickable: true,
                    nextEl: '#classify__nextButton',
                    prevEl: '#classify__prevButton',
                }" :modules="modules" class="mySwiper" @activeIndexChange="dosomething('classify',$event)" :grabCursor="true">
                    <swiper-slide @click="activeIndexChange(0)" :class="{'actived__classify__card': activedIndex == 0}"><span class="iconfont icon-CPU swiper__icon" ></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(1)" :class="{'actived__classify__card': activedIndex == 1}"><span class="iconfont icon-gpu swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(2)" :class="{'actived__classify__card': activedIndex == 2}"><span class="iconfont icon-diannaojixiang- swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(3)" :class="{'actived__classify__card': activedIndex == 3}"><span class="iconfont icon-neicuntiao swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(4)" :class="{'actived__classify__card': activedIndex == 4}"><span class="iconfont icon-Drie-Settings swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(5)" :class="{'actived__classify__card': activedIndex == 5}"><span class="iconfont icon-dianyuan swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(6)" :class="{'actived__classify__card': activedIndex == 6}"><span class="iconfont icon-zhuban swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(7)" :class="{'actived__classify__card': activedIndex == 7}"><span class="iconfont icon-a-sanrefengshan swiper__icon"></span></swiper-slide>
                </swiper>
                <img src="../assets/imgs/arrow-right.svg" alt="滑块向右移动" id="classify__nextButton"
                    class="swiper__arrow swiper__arrow__right">
            </div>
            <h3 class="setting__settingName">cpu</h3>
            <div class="setting__parts setting__sameflexbox">
                <img src="../assets/imgs/arrow-left.svg" alt="滑块向左移动" id="parts__prevButton"
                    class="swiper__arrow swiper__arrow__left">
                <swiper :slidesPerView="4" :spaceBetween="25" :navigation="{
                    clickable: true,
                    nextEl: '#parts__nextButton',
                    prevEl: '#parts__prevButton',
                }" :modules="modules" class="mySwiper" @activeIndexChange="dosomething('parts', $event)" :grabCursor="true">
                    <swiper-slide @click="activeIndexChange(0)" :class="{'actived__classify__card': activedIndex == 0}"><span class="iconfont icon-CPU swiper__icon" ></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(1)" :class="{'actived__classify__card': activedIndex == 1}"><span class="iconfont icon-gpu swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(2)" :class="{'actived__classify__card': activedIndex == 2}"><span class="iconfont icon-diannaojixiang- swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(3)" :class="{'actived__classify__card': activedIndex == 3}"><span class="iconfont icon-neicuntiao swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(4)" :class="{'actived__classify__card': activedIndex == 4}"><span class="iconfont icon-Drie-Settings swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(5)" :class="{'actived__classify__card': activedIndex == 5}"><span class="iconfont icon-dianyuan swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(6)" :class="{'actived__classify__card': activedIndex == 6}"><span class="iconfont icon-zhuban swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(7)" :class="{'actived__classify__card': activedIndex == 7}"><span class="iconfont icon-a-sanrefengshan swiper__icon"></span></swiper-slide>
                </swiper>
                <img src="../assets/imgs/arrow-right.svg" alt="滑块向右移动" id="parts__nextButton"
                    class="swiper__arrow swiper__arrow__right">
            </div>
        </section>
    </section>
</template>

<script setup>
import CardPrice from './CardPrice.vue';
// import DetailSetting from './DetailSetting.vue'

import { ref, onMounted, watch } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import gsap from "gsap";

const modules = [Navigation];

const activedIndex = ref(0);

function dosomething(str, e) {
    // console.log(e, str);
    switch (e.activeIndex) {
        case 0:
            gsap.to(`#${str}__prevButton`, { duration: .3, opacity: 0, ease: "power1.out", yoyo: true });
            break;
        case 5:
            gsap.to(`#${str}__nextButton`, { duration: .3, opacity: 0, ease: "power1.out", yoyo: true });
            break;
        default:
            gsap.to(`#${str}__prevButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            gsap.to(`#${str}__nextButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            break;
    }
}

function activeIndexChange(num) {
    activedIndex.value = num;
}

onMounted(() => {
    gsap.to('#classify__prevButton', { duration: 0, opacity: 0, ease: "power1.out", yoyo: true });
    gsap.to('#classify__prevButton', { duration: 1, x: -10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#classify__nextButton', { duration: 1, x: 10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#parts__prevButton', { duration: 0, opacity: 0, ease: "power1.out", yoyo: true });
    gsap.to('#parts__prevButton', { duration: 1, x: -10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#parts__nextButton', { duration: 1, x: 10, ease: "power1.out", repeat: -1, yoyo: true });
    // watch(document.getElementsByClassName('swiper')[0].activedIndex, (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // })
})

</script>

<style lang="scss" scoped>
.detail__page {
    user-select: none;

    display: flex;
    width: 100%;
    height: 100vh;
    // overflow: hidden;

    &__card {
        height: 100%;
        width: 37.5%;
        background-color: var(--color-card);
        padding: var(--margin-detail-top) 0 0 var(--margin-title-left);
        font-size: 2.2rem;
        color: white;
        margin-right: 25%;
    }

    &__setting {
        width: 37.5%;
        // overflow: hidden;
        padding-top: var(--margin-detail-top);
    }
}

.card {
    &__menu {
        font-weight: 100;
        width: 80%;
        display: flex;
        justify-content: flex-end;

        &__link:link,
        &__link:visited {
            color: white;
            text-decoration: none;
        }

        &>* {
            margin-left: 2rem;
        }

        h2 {
            margin-left: 0rem;
            margin-right: auto;
        }
    }

    &__main {
        // height: 100%;
        margin-top: 5rem;
        height: 60%;
        // background-color: red;

        display: flex;

        &__left {
            // width: 5rem;
            height: auto;
            display: block;


            &__switch {
                padding: 2rem;
                display: block;
                border-radius: 5px;
                background-color: rgba(white, 0.03);
                border: 2px solid rgba(white, 0.2);

                &:link,
                &:visited {
                    color: white;
                    text-decoration: none;
                }
            }
        }

        &__right {
            width: 80%;
            position: absolute;
            top: 50%;
            left: 55%;
            transform: translate(-50%, -50%);
            color: gray;
        }
    }
}

.setting {
    &__btn {
        font-size: 1.6rem;
        border-radius: .5rem;
        border: var(--border-btn-gray);
        padding: 1rem 2rem;

        &__p {
            margin-left: var(--margin-btn-textToIcon);
        }

        &:link,
        &:visited {
            color: black;
            text-decoration: none;
        }
    }

    &__title {
        display: block;
        font-size: 3rem;
        margin-top: 6rem;
    }

    &__sameflexbox {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        // overflow: hidden;
        // scrollbar-width: none;
        margin-top: 5rem;
    }

    // &__classify {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     width: 90%;
    //     // overflow: hidden;
    //     // scrollbar-width: none;
    //     margin-top: 5rem;
    // }

    &__settingName {
        margin-top: 5rem;
        font-size: 2.3rem;
    }
}

.menuActive {
    &::after {
        content: "";
        display: block;
        width: 60%;
        height: 0.3rem;
        background-color: rgb(68, 196, 249)
    }
}

.swiper {
    // margin-left: -3rem;
    transform: translateX(-2.5rem);
    // overflow: auto;
    width: 100%;
    display: block;


    /* height: 20%; */
    &__arrow {
        // transform: translateX(-2.5rem);
        // margin-left: -2.5rem;
        position: relative;
        left: -2.5rem;
        cursor: pointer;
        width: 20px;
        height: 20px;

        &__left {
            
            margin-right: 2rem;
        }

        &__right {
            margin-left: 2rem;
        }
    }

    &-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        border: 2px solid rgb(230, 230, 230);
        border-radius: 8px;
    }

    &__icon {
        color: inherit;
        font-size: 3rem;
    }
}
</style>

<style>
.swiper-wrapper {
    box-sizing: border-box;
}
.actived__classify__card {
    color: white;
    background-color: rgb(68, 196, 249);
}
</style>