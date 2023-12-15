<template>
    <div class="card">
        <div class="card__name"><h2>海景房</h2></div>
        <div class="card__picbox">
            <img class="card__picbox__pic" src="../assets/imgs/cp1.png" alt="电脑照片">
        </div>
        <div class="card__bottom">
            <div class="card__bottom__price">
                <div class="card__bottom__price__des">Price</div>
                <div class="card__bottom__price__num">￥5999</div>
            </div>
            <a href="#" class="card__bottom__link">+</a>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    background-color: rgb(71,79,113);
    width: 20%;
    height: 100%;
    border-radius: 3rem 3rem 0 0 ;
    color: var(--color-text-white);

    &__name {
        margin-top: 8rem;
        margin-left: 7rem;
        margin-bottom: 0;
        h2 {
            font-size: 2.2rem;
            font-weight: 100;
        }
    }
    &__picbox {
        margin: 0;
        width: 130%;
        height: 65%;
        &__pic {
            width: 100%;
            height: 100%;
        }
    }
    &__bottom {
        margin-top: 2rem;
        margin-left: 7rem;
        display: flex;

        &__link {
            &:link,
            &:visited {
                display: block;
                width: 6rem;
                height: 6rem;
                background-color: rgb(236,97,89);
                text-align: center;
                line-height: 6rem;
                border-radius: 1rem;
                font-size: 2.2rem;
                color: var(--color-text-white);
                text-decoration: none;
            }
        }
    }
}

</style>