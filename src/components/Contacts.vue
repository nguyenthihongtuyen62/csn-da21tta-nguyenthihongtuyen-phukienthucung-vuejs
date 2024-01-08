<template>
    <h1 class="contact__title">Liên hệ</h1>
    <div class="adress">
        <div class="adress__box">
            <div class="phone">
                <div class="title">
                    <img src="../assets/img/contact_page/phone.svg" alt="call">
                    <h3>Gọi cho chúng tôi</h3>
                </div>
                <div class="phones">
                    <div class="phones__box">
                        <!-- <h3 class="phones__title">Gọi cho chúng tôi</h3> -->
                        <a aria-label="link">0327375401</a>
                    </div>
                    
                    <!-- <div class="phones__box">
                        <h3 class="phones__title">Позвоните по номеру если хотите стать партнером</h3>
                        <a aria-label="link" href="tel:+998991001879">+998 90 000 00 00</a>
                    </div> -->
                </div>
            </div>
            <div class="other__boxes">
                <div class="title">
                    <img src="../assets/img/contact_page/geo.svg" alt="call">
                    <h3>Chi nhánh 1</h3>
                </div>
                <h4 class="text">
                    329B, Khóm 2, Phường 7, Kiên Thị Nhẫn, Trà Vinh
                </h4>
            </div>
            <div class="other__boxes">
                <div class="title">
                    <img src="../assets/img/contact_page/geo.svg" alt="call">
                    <h3>Chi nhánh 2</h3>
                </div>
                <h4 class="text">
                    Lương Hòa A, Châu Thành, Trà Vinh
                </h4>
            </div>

            <div class="other__boxes">
                <div class="title">
                    <img src="../assets/img/contact_page/mail.svg" alt="call">
                    <h3>Email</h3>
                </div>
                <a aria-label="link" class="text">
                    nthtuyen2003@gmail.com
                </a>
            </div>
            <div class="other__boxes">
                <div class="title">
                    <img src="../assets/img/contact_page/clock.svg" alt="call">
                    <h3>Thời gian phục vụ</h3>
                </div>
                <h4 class="text">Thứ hai đến thứ sáu 8 giờ sáng - 9 giờ tối
                    <br>Thứ bảy & chủ nhật 9 giờ sáng - 6 giờ tối
                    <br> Đóng cửa vào một vài ngày lễ
                </h4>
            </div>
        </div>
    </div>
        <!-- <div class="adress__map">
            <iframe title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264009513!2d69.13928184107841!3d41.28251254496256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1675941515561!5m2!1sru!2s"
                width="100%" height="100%" style="border:1px solid #CACFD3;" allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
    
    <!-- <h1 class="contact__subtitle">Видео проезда в сервис</h1> -->
    <!-- <div class="questions"> -->
        <!-- <div class="questions__video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lo1HRGl1CvE"
                title="YouTube video player" frameborder="0" style="border:1px solid #CACFD3;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div> -->
        <!-- <div class="questions__form">
            <form>
                <h1 class="questions__form-title">
                    Остались вопросы?
                </h1>
                <p class="questions__form-subtitle">
                    Оставьте ваши контактные данные и мы обязательно свяжемся с вами в течении 2 часов.
                </p>
                <input required class="questions__input" placeholder="Ваше имя" id="name" name="name" type="text">
                <input required class="questions__input" placeholder="Номер телефона" id="phone" name="name" type="number">
                <label class="privacy__label" for="privacy">
                    <input required id="privacy" type="checkbox">
                    <span>Нажимая “Отправить” вы соглашаетесь с политикой конфиденциальности и условиями. </span>
                </label>
                <input type="submit" name="submit" id="questions__submit">
            </form>
        </div> 
    </div> -->
</template> 

<style lang="scss" scoped>
.contact__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin-top: 40px;
    @media (max-width: 576px) {
        font-size: 24px;
        line-height: 1.5;
    }
}

.contact__subtitle {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin-top: 60px;
    color: #000000;
}

.adress {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 30px;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    &__box {
        padding: 25px;
        border-radius: 5px;
        border: 1px solid #CACFD3;

        .title {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                width: 20px;
                height: 20px;
                object-fit: contain;
            }

            h3 {
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
            }
        }

        .phone {
            max-width: 400px;
            width: 100%;

            &s {
                margin-top: 10px;
                display: flex;
                gap: 10px;
                row-gap: 18px;
                flex-wrap: wrap;
                justify-content: space-between;

                &__box {
                    max-width: 230px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;

                    h3 {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 17px;
                        color: #232323;
                    }

                    a {
                        text-decoration: underline 1px #CACFD3;
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 17px;
                        color: #232323;

                        &:hover {
                            transition: .3s;
                            color: #FFD600;
                        }
                    }
                }
            }
        }

        .other__boxes {
            margin-top: 26px;
            max-width: 320px;
            width: 100%;

            .text {
                margin-top: 10px;
                font-weight: 300;
                font-size: 14px;
                line-height: 140%;
            }

            a {
                display: block;
            }
        }

    }

    &__map {
        border-radius: 5px;
        width: 100%;
        min-height: 400px;

        iframe {
            border-radius: 5px;
        }
    }
}

.questions {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 30px;
    margin-top: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    &__video {
        width: 100%;
        border-radius: 5px;
        min-height: 420px;

        iframe {
            border-radius: 5px;

        }
    }

    &__form {
        width: 100%;

        form {
            border-radius: 5px;
            border: 1px solid #CACFD3;
            padding: 30px 30px 45px 30px;

            @media (max-width: 576px) {
                padding: 20px 20px 30px 20px;
                border-radius: 12px;
            }

            .questions__input {
                padding: 12px 0px;
                display: block;
                width: 100%;
                border: none;
                border-bottom: 1px solid #B1AEAE;
                font-weight: 400;
                font-size: 18px;
                color: black;
                margin-top: 20px;
            }

            .privacy__label {
                margin-top: 30px;
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                color: #333333;
            }

            #questions__submit {
                display: block;
                margin-top: 35px;
                width: 100%;
                padding: 16px 0px;
                background: #FFD600;
                border-radius: 5px;
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                color: #FFFFFF;
                cursor: pointer;

                &:hover {
                    transition: .4s;
                    background: #CACFD3;
                }
            }
        }

        &-title {
            font-weight: 700;
            font-size: 24px;
            line-height: 135.4%;
            color: #333333;
        }

        &-subtitle {
            font-weight: 300;
            font-size: 16px;
            line-height: 135.4%;
            color: #333333;
            margin-top: 8px;
        }
    }
}
</style>