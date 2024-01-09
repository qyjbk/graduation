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
            <div class="setting__mainClass">
                <div class="setting__mainClass__item iconActive"><span class="iconfont icon-CPU"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-gpu"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-diannaojixiang-"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-neicuntiao"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-Drie-Settings"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-dianyuan"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-zhuban"></span></div>
                <div class="setting__mainClass__item "><span class="iconfont icon-a-sanrefengshan"></span></div>
            </div>
            <h3 class="setting__settingName">cpu</h3>
        </section>
    </section>
</template>

<script setup>
import CardPrice from './CardPrice.vue';
// import DetailSetting from './DetailSetting.vue'

</script>

<style lang="scss" scoped>
.detail__page {
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
        overflow: hidden;
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
        border: 2px solid rgb(230,230,230);
        padding: 1rem 2rem;
        &__p {
            margin-left: 1.6rem;
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
    &__mainClass {
        display: flex;
        width: 84%;
        overflow: auto;
        margin-top: 5rem;

        &__item {
            display: block;
            padding: 2rem;
            border: 2px solid rgb(230,230,230);
            border-radius: 8px;

            &:not(:last-child) {
                margin-right: 1rem;
            }

            span {
                font-size: 3.5rem;
            }
        }
    }
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
// 图标高亮
.iconActive {
    color: white;
    background-color: rgb(68, 196, 249);
}
</style>