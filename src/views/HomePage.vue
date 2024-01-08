<script setup>
import TheSlider from '../components/TheSlider.vue'
import Products from '../components/HomePage/NewProducts.vue'
import PopularProducts from '../components/HomePage/PopularProducts.vue'
import BuyProduct from '../components/BuyProduct.vue'
import Partners from '../components/Partners.vue'
import Advantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    component: {
        TheSlider,
        Products,
        PopularProducts,
        BuyProduct,
        // Partners,
        Advantage,
    }
}
</script>

<template>
    <TheSlider />
    <section class="product">
        <div class="product__title"><span>Sản phẩm</span>yêu thích</div>
        <PopularProducts />
    </section>


    <div class="buy__product">
        <div class="buy__product-title">Ưu đãi<span>mới nhất</span></div>
        <BuyProduct />
    </div>

    
</template>

<style lang="scss">
.product {
    margin-top: 80px;
    height: 200px;
    bottom: 30px;
    &__title {
        text-align: left; 
        max-width: 1600px;
        width: 100%;
        margin: auto;
        font-weight: 700;
        font-size: 28px;
        color: black;
        white-space: pre;
        margin-bottom: 50px;

        @media (max-width: 576px) {
            font-size: 22px;
        }
    }

    &__title span {
        padding: 9px 5px 9px 100px;
        background: #FFD600;
        color: white;

        @media (max-width: 576px) {
            padding: 9px 5px 9px 50px;
        }
    }
}


.buy__product {
    margin-top: 80px;
    padding-top: 500px;
    
    &-title {
        text-align: center;
        font-weight: 700;
        font-size: 28px;
        color: black;
        white-space: pre;
        margin-bottom: 40px;

        @media (max-width: 576px) {
            font-size: 22px;
        }
    }

    &-title span {
        padding: 9px 160px 9px 5px;
        background: #FFD600;
        color: white;
        

        @media (max-width: 576px) {
            padding: 9px 70px 9px 5px;
        }
    }
}


.partners {
    margin-top: 65px;
    padding: 40px 0px 50px 0px;
    text-align: center;
    background: #F5F7FA;

    @media (max-width: 576px) {
        padding: 30px 0px 20px 0px;
    }

    &__title {
        font-weight: 700;
        font-size: 28px;
        color: #232323;

        @media(max-width: 400px) {
            font-size: 24px;
        }
    }

    &__subtitle {
        margin-top: 25px;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
}
</style>