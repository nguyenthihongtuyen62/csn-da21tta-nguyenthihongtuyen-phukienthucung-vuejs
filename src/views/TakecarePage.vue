<script setup>
import TheAdvantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    name: "Takecare",
    component: {
        TheAdvantage,
    }
}
</script>

<template>
    <section class="about__page">
        <div class="container content">
            <div class="page__router">
                <a @click="$router.push('/')"
                    href="#">Trang chủ</a>
                <!-- <span> / </span>
                <span>Về chúng tôi</span> -->
            </div>
            <section class="info">
                <div class="info__box">
                    <div class="info__article">
                        <h1 class="info__title">Cách làm sạch răng cho chó tại nhà</h1>
                        <p class="text">
                            Hơi thở của chó có mùi là điều không bình thường nên điều quan trọng là phải giữ cho răng và nướu của chúng sạch sẽ và khỏe mạnh. Dưới đây là những lời khuyên hàng đầu của chúng tôi về cách làm sạch răng cho chó tại nhà để bảo vệ hàm răng trắng như ngọc của chúng.
                        </p>
                        <p class="text">
                            Đến Greencross Vets để khám răng
Được rồi, vì vậy bạn có thể phải rời khỏi nhà để thực hiện việc này, nhưng bước đầu tiên để chăm sóc răng cho chó của bạn là đến gặp bác sĩ thú y. Làm việc với nhóm Greencross Vets tại địa phương của bạn để thiết lập một kế hoạch chăm sóc phù hợp với sức khỏe răng miệng của thú cưng là cách tốt nhất để quản lý răng và miệng của chó. Ngoài ra, việc liên tục đến gặp bác sĩ thú y là điều quan trọng để duy trì hàm răng cho chú chó của bạn trong suốt cuộc đời của chúng. Bạn sẽ không thể đi nhiều năm mà không đến gặp nha sĩ và thú cưng của bạn cũng vậy! Đặt lịch khám răng tại Greencross Vets  để chú chó của bạn có hơi thở thơm mát và bạn có thể có một khởi đầu mới cho việc chăm sóc răng miệng cho chúng.
                        </p>
                    </div>
                    <div class="info__img">
                        <!-- <img src="../assets/img/about/firstw.webp"
                            alt="about img"> -->
                        <div class="right__item"></div>
                    </div>
                </div>
            </section>
            <TheAdvantage />
        </div>
        <section class="features">
            <div class="container">
                <div class="features__img">
                    <!-- <img src="../assets/img/about/second.webp"
                        alt="computer"> -->
                    <div class="left__item"></div>
                </div>
                <div class="features__box">
                    <h1 class="title">
                        Một trong những cách đơn giản và tốt nhất để làm sạch răng cho chó của bạn là chuyển chúng sang loại thức ăn khô chăm sóc răng miệng đã được khoa học chứng minh cho bữa ăn hàng ngày. Những loại thực phẩm này có dạng hạt và kết cấu đặc biệt giúp chà sạch răng cho chó khi chúng nhai để giúp giảm mảng bám và cao răng tích tụ. Ngoài ra, công thức đã được chứng minh lâm sàng giúp hơi thở thơm mát cho thú cưng của bạn mỗi khi chúng ăn. Hãy tìm những sản phẩm có con dấu của Hội đồng Sức khỏe Răng miệng Thú y (VOHC) chứng tỏ rằng chúng đã đáp ứng được bằng chứng khoa học mạnh mẽ trong việc kiểm soát bệnh răng miệng cho chó và mèo.
                    </h1>
                    
                </div>
            </div>
        </section>
        <div class="info__second">
            <div class="container">
                <div class="info__img">
                    <!-- <img src="../assets/img/about/firstw.webp"
                        alt="about img"> -->
                </div>
                <div class="info__article">
                    <h1 class="info__article"> Đánh răng hàng ngày</h1>
                    <p class="text">                     
                       
Đánh răng là một phần trong cuộc sống hàng ngày của con người chúng ta, nhưng bạn có biết rằng bạn thực sự cũng có thể đánh răng cho thú cưng của mình không? Đây được các bác sĩ thú y khuyên dùng là một trong những cách tốt nhất để chống lại bệnh răng miệng ở chó và ngay cả khi bạn làm điều đó chỉ một phút mỗi ngày, bạn sẽ tạo ra sự khác biệt thực sự về sức khỏe răng miệng và tổng thể của thú cưng.

Bạn không thể sử dụng kem đánh răng của người cho thú cưng của mình, nhưng tin tốt là có những loại kem đánh răng dành cho thú cưng có hương vị như thịt bò và thịt gà mà chó của bạn sẽ thấy rất ngon miệng. Bôi một ít vào bàn chải đánh răng dành cho thú cưng (hoặc bàn chải đánh răng dùng ngón tay dành cho chó giống nhỏ) và làm theo hướng dẫn của chúng tôi để đánh răng cho chó của bạn .
                    </p>
                    <p class="text">
                        Hãy trải nghiệm sự khác biệt với TFamily - nơi tận tâm, chuyên nghiệp và sáng tạo gặp nhau. Chân thành cảm ơn quý khách hàng đã lựa chọn TFamily làm điểm đến cho sự chăm sóc và yêu thương thú cưng của mình.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about__page {
    overflow-x: hidden;

    .info {
        padding: 20px 0px 60px;

        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
            color: #232323;
        }

        &__box {
            display: flex;
            align-items: center;
            gap: 30px;
            justify-content: space-between;

            @media (max-width: 1024px) {
                flex-wrap: wrap;
                gap: 65px;
            }
        }

        &__article {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
            color: #232323;
           

            @media (max-width: 1024px) {
                width: 100%;
            }

            .text {
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #000000;
                margin-top: 20px;
            }
        }

        &__img {
            width: 40%;
            position: relative;

            @media (max-width: 1024px) {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 70%;
                height: 100%;
                margin: auto;
                object-fit: contain;
                transform: scale(1.2);

                @media (max-width: 1280px) {
                    width: 100%;
                }

                @media (max-width: 1024px) {
                    width: 60%;
                }

                @media (max-width: 576px) {
                    width: 80%;
                }
            }

            // .right__item {
            //     background: linear-gradient(270deg, #FFD600 32.95%, rgba(255, 214, 0, 0) 81.61%);
            //     height: 95px;
            //     width: 70%;
            //     position: absolute;
            //     top: 50%;
            //     transform: translateY(-50%);
            //     right: -35%;
            //     z-index: -1;

            //     @media (max-width: 1024px) {
            //         right: -20%;
            //     }
            // }
        }
    }
}

.info__second {
    margin-top: 55px;
    padding: 30px 0px 60px;

    .container {
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-between;

        @media (max-width: 1024px) {
            flex-wrap: wrap;
            gap: 65px;
        }

        .text {
            @media (min-width: 1280px) {
                font-size: 22px;
            }
        }
    }

}

.features {
    padding: 50px 0px 70px;
    background: #F5F7FA;

    .container {
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }

    &__img {
        width: 50%;
        position: relative;

        @media (max-width: 1280px) {
            width: 55%;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }

        img {
            position: relative;
            z-index: 2;
            width: 100%;
            object-fit: contain;
        }

        // .left__item {
        //     position: absolute;
        //     top: 50%;
        //     transform: translateY(-50%);
        //     height: 95px;
        //     width: 100%;
        //     left: -40%;
        //     z-index: 1;
        //     background: #FFD600;
        // }
    }

    &__box {
        width: 50%;

        @media (max-width: 1280px) {
            width: 45%;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }

        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: 0.03em;
            color: #232323;
        }
    }
    

    &__list {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
            display: flex;
            gap: 18px;
            align-items: center;

            p {
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0.03em;
                color: #232323;
            }
        }
    }
}
</style>