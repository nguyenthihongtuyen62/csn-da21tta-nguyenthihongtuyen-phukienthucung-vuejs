
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
  import { Row } from "antd";
  import TheCard from "../TheCard.vue";
  import { useRowStyle } from "antd/es/grid/style";
  
  export default {
    data() {
      return {
        product: [
          // sản phẩm của hàng đầu tiên
          [
          {
                    img: "src/assets/img/products/p1.png",
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
                    img: "src/assets/img/products/p3.png",
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
          [
            {
              img: "src/assets/img/products/p6.png",
              name: "Bàn cào móng tròn zodiac cho mèo tặng kèm catnip cao cấp",
              price: "49.000đ",
              rating: "src/assets/img/products/rating.png",
            },
            {
                    img: "src/assets/img/products/p7.png",
                    name: `Xương Orgo làm sạch răng cho chó thơm miệng bổ sung canxi cho chó`,
                    price: "15.000đ",
                    rating: "src/assets/img/products/rating.png",
                },
                {
                    img: "src/assets/img/products/p8.png",
                    name: `Giường thú cưng thoáng khí có thể tháo rời được `,
                    price: "138.000đ",
                    rating:  "src/assets/img/products/rating.png",
                },
                {
                    img: "src/assets/img/products/p9.png",
                    name: ` Kem đánh răng PETKIN`,
                    price: "27.000đ",
                    rating:  "src/assets/img/products/rating.png",
                },
                {
                    img: "src/assets/img/products/p10.png",
                    name: `Máy uống nước tự động cho mèo`,
                    price: "110.000đ",
                    rating:  "src/assets/img/products/rating.png",
                },
          ],
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
  