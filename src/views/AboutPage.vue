<script setup>
import TheAdvantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    name: "AboutPage",
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
                        <h1 class="info__title">Về chúng tôi</h1>
                        <p class="text">
                            TFamily chính là lựa chọn hàng đầu dành cho những người yêu quý thú cưng, nơi chúng tôi không chỉ cung cấp những sản phẩm chất lượng cao mà còn mang đến trải nghiệm mua sắm chuyên nghiệp và dịch vụ khách hàng xuất sắc.
                        </p>
                        <p class="text">
                            Chúng tôi không chỉ xem thú cưng là vật nuôi, mà còn coi chúng như thành viên quan trọng của gia đình. Tầm nhìn của chúng tôi là tạo ra một không gian mua sắm đẳng cấp, nơi khách hàng có thể tìm thấy những sản phẩm phụ kiện chất lượng và dịch vụ chuyên nghiệp nhất cho thú cưng của mình.
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
                        Khi khách hàng đến với TFamily
                    </h1>
                    <ul class="features__list">
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p> Sản phẩm chất Lượng và An Toàn</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Sự Tận Tâm</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Sản Phẩm Đa Dạng</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Giao Hàng Nhanh Chóng và An Toàn</p>
                        </li>
                    </ul>
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
                    <h1 class="info__article">Đặc Quyền Thành Viên</h1>
                    <p class="text">                     
                        Chúng tôi trân trọng sự tin tưởng của quý khách hàng, và để đáp ứng lòng tin này, chúng tôi mang đến những đặc quyền độc quyền cho các thành viên của TFamily. Đăng ký thành viên để nhận được ưu đãi đặc biệt, thông tin mới nhất và trải nghiệm mua sắm tuyệt vời nhất.
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