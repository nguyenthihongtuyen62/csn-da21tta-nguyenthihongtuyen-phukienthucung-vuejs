<template>
    <section class="catalog">
        <aside class="catalog__side">
            <ul>
                <li>
                    <a href="#">Chó</a>
                </li>
                <li>
                    <a href="#">Mèo</a>
                </li>
                <li>
                    <a href="#">Sản phẩm chó và mèo</a>
                </li>
                <li>
                    <a href="#">Hamster</a>
                </li>
               
            
            </ul>
        </aside>
        <div class="catalog__content">
            <div class="catalog__content-item">
                <h1 class="title">Thức ăn hạt cho chó</h1>
                
        <div>
            
        <div class="product__row" v-for="(item, index) in product1" :key="index">
        <div v-for="(productItem, itemIndex) in item" :key="itemIndex" class="product__list">
            <div class="product__info">
            <img class="img_product" :src="productItem.img" alt="Product Image">
            <p class="name__product">{{ productItem.name }}</p>
            <img :src="productItem.rating" alt="Rating Image">
            <p class="price__product">{{ productItem.price }}</p>
            
            </div>
        </div>
        </div>
    </div>
    
   
                <!-- <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in $store.state.products.slice(24, 36)">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :discount="card.discount"
                            :like="card.like"
                            :img="`https://picsum.photos/${200 + card.id}/300`"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper> -->
            </div>
            <div class="catalog__content-item">
                <h1 class="title">Pate cho chó</h1>

                <div class="product__row" v-for="(item, index) in product2" :key="index">
        <div v-for="(productItem, itemIndex) in item" :key="itemIndex" class="product__list">
            <div class="product__info">
            <img class="img_product" :src="productItem.img" alt="Product Image">
            <p class="name__product">{{ productItem.name }}</p>
            <img :src="productItem.rating" alt="Rating Image">
            <p class="price__product">{{ productItem.price }}</p>
            
            </div>
        </div>
        </div>
                <!-- <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in $store.state.products.slice(36, 48)">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :discount="card.discount"
                            :like="card.like"
                            :img="`https://picsum.photos/${200 + card.id}/300`"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper> -->
            </div>
            <div class="catalog__content-item">
                <h1 class="title">Súp - Bánh thưởng cho chó</h1>

                <div class="product__row" v-for="(item, index) in product3" :key="index">
        <div v-for="(productItem, itemIndex) in item" :key="itemIndex" class="product__list">
            <div class="product__info">
            <img class="img_product" :src="productItem.img" alt="Product Image">
            <p class="name__product">{{ productItem.name }}</p>
            <img :src="productItem.rating" alt="Rating Image">
            <p class="price__product">{{ productItem.price }}</p>
            
            </div>
        </div>
        </div>
                <!-- <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in $store.state.products.slice(48, 60)">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :discount="card.discount"
                            :like="card.like"
                            :img="`https://picsum.photos/${200 + card.id}/300`"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper> -->
            </div>
        </div>
    </section>
</template>

<script>
import TheCard from "./TheCard.vue";

export default {
     data() {
       return {
         product1: [
           // sản phẩm của hàng đầu tiên
           [
           {
                     img: "src/assets/img/products/p9.png",
                     name: `Thức ăn hạt cho chó Hills Science Die`,
                     price: "130.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p7.png",
                     name: `Nhà hai tầng đầy màu sắc cho hamster`,
                     price: "53.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p3.png",
                     name: `Pate cá ngừ xé miếng lớn cao cấp thơm ngon cho mèo`,
                     price: "38.000",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p6.png",
                     name: `Vòng cổ cho chó + thẻ tên khác theo yêu cầu`,
                     price: "37.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p1.png",
                     name: `Kèm cắt móng`,
                     price: "25.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 
             ],
        
         ],

         product2: [
           // sản phẩm của hàng đầu tiên
           [
           {
                     img: "src/assets/img/products/p3.png",
                     name: `Thức ăn hạt cho chó Hills Science Die`,
                     price: "130.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p2.png",
                     name: `Nhà hai tầng đầy màu sắc cho hamster`,
                     price: "53.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p8.png",
                     name: `Pate cá ngừ xé miếng lớn cao cấp thơm ngon cho mèo`,
                     price: "38.000",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p4.png",
                     name: `Vòng cổ cho chó + thẻ tên khác theo yêu cầu`,
                     price: "37.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p5.png",
                     name: `Kèm cắt móng`,
                     price: "25.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 
             ],
        
         ],

         product3: [
           // sản phẩm của hàng đầu tiên
           [
           {
                     img: "src/assets/img/products/p1.png",
                     name: `Thức ăn hạt cho chó Hills Science Die`,
                     price: "130.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p3.png",
                     name: `Nhà hai tầng đầy màu sắc cho hamster`,
                     price: "53.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p7.png",
                     name: `Pate cá ngừ xé miếng lớn cao cấp thơm ngon cho mèo`,
                     price: "38.000",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p4.png",
                     name: `Vòng cổ cho chó + thẻ tên khác theo yêu cầu`,
                     price: "37.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/p9.png",
                     name: `Kèm cắt móng`,
                     price: "25.000đ",
                     rating:  "src/assets/img/products/rating.png",
                 },
                 
             ],
        
         ],
       };
     },
   };
</script>

<style lang="scss" scoped>
.swiper {
    padding: 20px 10px;
    width: 100%;

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .product__item {
        width: 100%;
        margin: 0;
        @media (max-width: 576px) {
            width: 85%;
        }
        @media (max-width: 449px) {
            width: 70%;
        }
    }

    @media (min-width: 768px) {
        &::after {
            content: '';
            background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0.234) 100%);
            position: absolute;
            z-index: 9;
            top: 0;
            right: -5px;
            width: 100px;
            height: 100%;
        }
    }

}

.catalog {
    margin-top: 40px;
    color: #232323;
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: 100%;
    }

    &__side {
        width: 100%;
        background: #F5F7FA;
        border-radius: 4px;
        padding: 20px;

        @media (max-width: 1024px) {
            display: none;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 5px;

            a {
                padding: 10px 0px;
                display: block;
                font-weight: 500;
                font-size: 14px;
                line-height: 120%;
                color: #222222;

                &:hover {
                    transition: .3s;
                    color: #FFD600;
                }
            }
        }
    }

    &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
            .title {
                font-weight: 700;
                font-size: 24px;
                line-height: 100%;
                color: #232323;
                @media (max-width: 768px) {
                    font-size: 20px;
                }
            }
        }
    }
}



.catalog__content {

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 18px;
        color: #000000;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 38px;
        min-width: 38px;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
        height: 38px;
        background: white;
        border-radius: 50%;
    }
    .product__row {
  display: flex;
  justify-content: center;
  margin-top: 3px;

  .product__list {
    border: 1px solid #efefef;
    width: 300px;
    margin: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    position: relative;
  }

  .product__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name__product {
    padding-top: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 17px;
    text-align: left; 
    margin-top: 10px; 
    margin-left: 10px;
  }

  .price__product {
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    padding-top: 5px;
    
  }

  .img_product {
    margin-top: 10px; 
    height: 200px;
    width: auto;
  }
}
}
</style>