<!-- <template>
    <section class="buy">
        <div class="container">
            <div v-for="(card, index) in $store.state.products.slice(92, 93)"
                :key="index"
                class="buy__main">
                <div class="buy__main-img">
                    <img :src="`src/assets/img/products/ps1.png`"
                        alt="product">
                </div>
                <p class="category">
                    {{ card.type }}
                </p>
                <p class="info">
                    {{ card.title }}
                </p>
                <p class="price">
                    {{ card.price }} đ
                </p>
                <div class="time__box">
                    <img src="../assets/img/clock.svg"
                        alt="">
                    <p class="time">01 : 30 : 6</p>
                </div>
                <div v-if="!card.like"
                    @click="AddToLikes(card)"
                    :class="card.like ? 'add-like' : ''"
                    class="favorite">
                    <img src="../assets/img/icons/like.svg"
                        alt="like">
                </div>
                <div v-else
                    @click="AddToLikes(card)"
                    :class="card.like ? 'add-like' : ''"
                    class="favorite">
                    <img src="../assets/img/icons/liked.svg"
                        alt="like">
                </div>
                <div @click="AddCart(card)"
                    class="addCart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>В Корзину</p>
                </div>
            </div>
             <div class="product__list">
                <the-card v-for="(card, index) in $store.state.products.slice(84, 92)"
                    :key="index"
                    :title="card.title"
                    :type="card.type"
                    :price="card.price"
                    :discount="card.discount"
                    :like="card.like"
                    :img="`https://picsum.photos/${200 + index}/300`"
                    @addProductToCard="AddCart(card)"
                    @addToFavorites="AddToLikes(card)" />
            </div> 
        </div>
    </section>
</template>

<script>
import TheCard from "./TheCard.vue";
export default {
    name: "BuyProduct",
    components: { TheCard },
    methods: {
        AddCart(card) {
            this.$store.commit('ADD_TO_CART', card)
        },
        AddToLikes(data) {
            data.like = !data.like
        }
    }
}
</script>

<style lang="scss" scoped>
.add-like {
    visibility: visible !important;
    opacity: 1 !important;
    background: rgba(255, 255, 255, 0.9) !important;
}

.buy {
    padding: 20px 0px;

    .container {
        display: grid;
        grid-template-columns: 2fr 4fr;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;

        @media (max-width: 1280px) {
            grid-template-columns: 3fr 4fr;
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }

    .product__list {
        width: 100%;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 450px) {
            grid-template-columns: 1fr;
        }
    }
}

.buy__main {
    width: 100%;
    box-shadow: 0px 0px 40px rgba(33, 207, 234, 0.1);
    position: relative;
    padding: 20px 0px 10px 0px;
    background: white;
    text-align: center;
    height: auto;

    @media (max-width: 1024px) {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 450px) {
        width: 100%;
    }

    img {
        width: 80%;
        margin: auto;
    }


    &-img {
        height: 340px;
        width: 100%;

        img {
            height: 100%;
            width: 80%;
            @media (max-width: 576px) {
                width: 100%;
            }
        }
    }

    .category {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        color: #90989F;
    }

    .info {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #333333;
        padding: 0px 14px;
    }

    .time__box {
        display: flex;
        justify-content: center;
        gap: 16px;
        align-items: center;
        margin-bottom: 10px;

        img {
            width: 26px;
            margin: 0;
        }

        p {
            display: inline-block;
            font-weight: 400;
            font-size: 18px;
            color: #FFD600;
        }
    }

    .price {
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 12px;
    }


    .favorite {
        position: absolute;
        cursor: pointer;
        top: 14px;
        right: 14px;
        width: 50px;
        height: 46px;
        padding: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(201, 201, 201, 0.2);
        transition: .3s;
        border-radius: 6px;

        img {
            width: 80%;
        }

        &:hover {
            background: rgba(201, 201, 201, 0.6);

        }
    }

    .addCart {
        margin: auto;
        width: 95%;
        border-radius: 4px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: white;
        background: #FFD600;
        cursor: pointer;
        border: 1px solid #FFD600;
        margin-top: 10px;

        i {
            font-size: 24px;
        }

        p {
            font-weight: 700;
            font-size: 24px;
        }

        &:hover {
            transition: .3s;
            color: #FFD600;
            background: white;
        }

        &:active {
            color: black;
            box-shadow: 0px 0px 10px 2px rgba(128, 128, 128, 0.5);
        }
    }
}
</style> -->

<template>
    <div>
     <div class="product__row" v-for="(item, index) in product" :key="index">
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
   </template>
   
   <script>
  import TheCard from "./TheCard.vue";
    export default {
     data() {
       return {
         product: [
           // sản phẩm của hàng đầu tiên
           [
           {
                     img: "src/assets/img/products/bp1.png",
                     name: `Pate Royal Canin cho mèo`,
                     price: "28.000đ",
                     rating: "src/assets/img/products/rating.png",
                 },
                 {
                     img: "src/assets/img/products/bp2.png",
                     name: `Bánh thưởng xúc xích gà cho chó`,
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
           //  sản phẩm của hàng thứ hai
        //    [
        //      {
        //        img: "src/assets/img/products/p6.png",
        //        name: "Bàn cào móng tròn zodiac cho mèo tặng kèm catnip cao cấp",
        //        price: "49.000đ",
        //        rating: "src/assets/img/products/rating.png",
        //      },
        //      {
        //              img: "src/assets/img/products/p7.png",
        //              name: `Xương Orgo làm sạch răng cho chó thơm miệng bổ sung canxi cho chó`,
        //              price: "15.000đ",
        //              rating: "src/assets/img/products/rating.png",
        //          },
        //          {
        //              img: "src/assets/img/products/p8.png",
        //              name: `Giường thú cưng thoáng khí có thể tháo rời được `,
        //              price: "138.000đ",
        //              rating:  "src/assets/img/products/rating.png",
        //          },
        //          {
        //              img: "src/assets/img/products/p9.png",
        //              name: ` Kem đánh răng PETKIN`,
        //              price: "27.000đ",
        //              rating:  "src/assets/img/products/rating.png",
        //          },
        //          {
        //              img: "src/assets/img/products/p10.png",
        //              name: `Máy uống nước tự động cho mèo`,
        //              price: "110.000đ",
        //              rating:  "src/assets/img/products/rating.png",
        //          },
        //    ],
         ],
       };
     },
   };
   </script>
   
   <style lang="scss" scoped>
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
 
 //   .rating__container {
 //     margin-top: 60px; /* Tạo khoảng cách với giá sản phẩm */
 //     align-self: flex-start; /* Đặt hình ảnh đánh giá sang trái */
 //     display: flex; /* Hiển thị theo chiều ngang để chia đều các phần tử con */
 //     justify-content: flex-start; /* Đặt hình ảnh đánh giá và tên sản phẩm sang trái */
 //     width: 100%; 
 //   }
 }
   
   </style>
   