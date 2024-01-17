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
                }" :modules="modules" class="mySwiper" @activeIndexChange="dosomething('classify', $event)"
                    :grabCursor="true">
                    <swiper-slide @click="activeIndexChange(0, 'cpu')"
                        :class="{ 'actived__classify': activedClassifyIndex == 0, }"><span
                            class="iconfont icon-CPU swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(1, 'gpu')"
                        :class="{ 'actived__classify': activedClassifyIndex == 1 }"><span
                            class="iconfont icon-gpu swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(2, 'chassis')"
                        :class="{ 'actived__classify': activedClassifyIndex == 2 }"><span
                            class="iconfont icon-diannaojixiang- swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(3, 'ram')"
                        :class="{ 'actived__classify': activedClassifyIndex == 3 }"><span
                            class="iconfont icon-neicuntiao swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(4, 'disk')"
                        :class="{ 'actived__classify': activedClassifyIndex == 4 }"><span
                            class="iconfont icon-Drie-Settings swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(5, 'power')"
                        :class="{ 'actived__classify': activedClassifyIndex == 5 }"><span
                            class="iconfont icon-dianyuan swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(6, 'board')"
                        :class="{ 'actived__classify': activedClassifyIndex == 6 }"><span
                            class="iconfont icon-zhuban swiper__icon"></span></swiper-slide>
                    <swiper-slide @click="activeIndexChange(7, 'fan')"
                        :class="{ 'actived__classify': activedClassifyIndex == 7 }"><span
                            class="iconfont icon-a-sanrefengshan swiper__icon"></span></swiper-slide>
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
                }" :modules="modules" class="mySwiper" @activeIndexChange="dosomething('parts', $event)"
                    :grabCursor="true">
                    <swiper-slide @click="activeIndexChange(0, 'rog4070', true)" @mouseenter="hoverPartsIndex = 0"
                        :class="{ 'hover__parts': hoverPartsIndex == 0 }">
                        <img src="../assets/imgs/gpu.jpg" alt="gpu picture" class="setting__parts__cardimg">
                        <h2 class="setting__parts__brand">华硕 ROG</h2>
                        <h3 class="setting__parts__type">4070 Ti</h3>
                        <div class="underline__parts" id="underline0"></div>
                    </swiper-slide>
                    <swiper-slide @click="activeIndexChange(1, 'rog4070', true)" @mouseenter="hoverPartsIndex = 1"
                        :class="{ 'hover__parts': hoverPartsIndex == 1 }"><span
                            class="iconfont icon-gpu swiper__icon"></span>
                        <div class="underline__parts" id="underline1"></div>
                    </swiper-slide>
                    <swiper-slide @click="activeIndexChange(2, 'rog4070', true)" @mouseenter="hoverPartsIndex = 2"
                        :class="{ 'hover__parts': hoverPartsIndex == 2 }"><span
                            class="iconfont icon-diannaojixiang- swiper__icon"></span>
                        <div class="underline__parts" id="underline2"></div>
                    </swiper-slide>
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
import { useRoute, useRouter } from 'vue-router';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import gsap from "gsap";

const modules = [Navigation];

const $router = useRouter();
const $route = useRoute();

const activedClassifyIndex = ref(0);
const activedPartsIndex = ref(0);
const hoverPartsIndex = ref(0);

// 后续提供http请求得来的数据
const classify_recover_cpu = {
    classifyname: "cpu",
    partsCards: [
        {
            id: 'aaaaa',
            partImg: "/imgs/cpu/i7_13700.png", 
            partBrand: 'inter',
            partType: 'i7_13700',
            partPrice: 2599,
            partInventory: 10
        },
        {
            id: 'bbbbb',
            partImg: "/imgs/cpu/r5_5600x.png",
            partBrand: 'amd',
            partType: 'r5-5600G',
            partPrice: 999,
            partInventory: 10
        },
        {
            id: 'ccccc',
            partImg: "/imgs/cpu/r7_7800x3d.png",
            partBrand: 'amd',
            partType: 'r7_7800x3d',
            partPrice: 2999,
            partInventory: 10
        }
    ]
}

const classify_recover_board = {
    classifyname: "board",
    partsCards: [
        {
            id: 'aaaaa',
            partImg: "/imgs/cpu/i7_13700.png", 
            partBrand: 'inter',
            partType: 'i7_13700',
            partPrice: 2599,
            partInventory: 10
        },
        {
            id: 'bbbbb',
            partImg: "/imgs/cpu/r5_5600x.png",
            partBrand: 'amd',
            partType: 'r5-5600G',
            partPrice: 999,
            partInventory: 10
        },
        {
            id: 'ccccc',
            partImg: "/imgs/cpu/r7_7800x3d.png",
            partBrand: 'amd',
            partType: 'r7_7800x3d',
            partPrice: 2999,
            partInventory: 10
        }
    ]
}

function dosomething(str, e) {
    // console.log(e, str);
    switch (e.activeIndex) {
        case 0:
            gsap.to(`#${str}__prevButton`, { duration: .3, opacity: 0, ease: "power1.out", yoyo: true });
            gsap.to(`#${str}__nextButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            break;
        case 4:
            gsap.to(`#${str}__prevButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            gsap.to(`#${str}__nextButton`, { duration: .3, opacity: 0, ease: "power1.out", yoyo: true });
            break;
        default:
            gsap.to(`#${str}__prevButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            gsap.to(`#${str}__nextButton`, { duration: .3, opacity: 1, ease: "power1.out", yoyo: true });
            break;
    }
}

function activeIndexChange(num, str, isparts = false) {
    if (isparts) {
        activedPartsIndex.value = num;
    } else {
        $router.push(`/detail/${str}`);
        activedClassifyIndex.value = num;
    }
}

watch(activedPartsIndex, (newVal, oldVal) => {
    gsap.to(`#underline${oldVal}`, { duration: .3, width: 0, ease: "power1.out" });
    gsap.to(`#underline${newVal}`, { duration: .3, width: '60%', ease: "power1.out" });
})

onMounted(() => {
    console.log($route.params.ptname)
    gsap.to('#underline0', { duration: 0, width: '60px', ease: "power1.out" });
    gsap.to('#classify__prevButton', { duration: 0, opacity: 0, ease: "power1.out", yoyo: true });
    gsap.to('#classify__prevButton', { duration: 1, x: -10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#classify__nextButton', { duration: 1, x: 10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#parts__prevButton', { duration: 0, opacity: 0, ease: "power1.out", yoyo: true });
    gsap.to('#parts__prevButton', { duration: 1, x: -10, ease: "power1.out", repeat: -1, yoyo: true });
    gsap.to('#parts__nextButton', { duration: 1, x: 10, ease: "power1.out", repeat: -1, yoyo: true });
})

</script>

<style lang="scss" scoped>
.detail__page {
    user-select: none;

    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;

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
    transform: translateX(-2.5rem);
    width: 100%;
    display: block;

    &__arrow {
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

    &__icon {
        color: inherit;
        font-size: 3rem;
    }
}

.setting__classify {
    .swiper {
        &-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8rem;
            height: 8rem;
            border: 2px solid rgb(230, 230, 230);
            border-radius: 8px;
        }
    }
}

.setting__parts {
    .swiper {
        transform: translateX(0);

        &-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 10rem;
            height: 15rem;
            // border: 2px solid rgb(230, 230, 230);
            border-radius: 8px;
        }
    }

    &__cardimg {
        width: 90%;
    }

    &__brand {
        margin-top: 2rem;
        font-size: 1.5rem;
    }

    &__type {
        margin-top: 1rem;
        font-size: 1.5rem;
    }
}
</style>

<style>
.swiper-wrapper {
    box-sizing: border-box;
}

.actived__classify {
    transition: color .2s, background-color .8s;
    color: white;
    background-color: rgb(68, 196, 249);
}

.underline__parts {
    transition: all .3s;
    transform-origin: center;
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0.3rem;
    background-color: rgb(235, 97, 90)
}

.hover__parts {
    background-color: rgb(228, 225, 220);
}</style>