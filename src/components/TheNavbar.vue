<template>
    <nav>
        <div class="container">
            <div class="menu">
                -->
            </div>
            <ul class="navbar-list">
                <li>
                    <a @click="$router.push('/about')"
                        aria-label="link"
                        href="#">Giới thiệu</a>
                </li>
               
                <li>
                    <a @click="$router.push('/catalog')"
                        aria-label="link"
                        href="#">Sản phẩm</a>
                </li>

                <li>
                    <a @click="$router.push('/takecare')"
                        aria-label="link"
                        href="#">Chăm sóc thú cưng</a>
                </li>

                <li>
                    <a @click="$router.push('/contact')"
                        aria-label="link"
                        href="#">Liên hệ</a>
                </li>
               
              
            </ul>
           
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TheNavbar',
}
</script>

<style lang="scss" scoped>
nav {
    padding: 20px 0px 22px;
    box-shadow: 0px 0px 10px rgba(41, 121, 255, 0.1);
}

nav .container {
    display: grid;
    grid-template-columns: 130px 1fr 112px;
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
}

/* ===== navbar ===== */

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .favorite {
        display: none;

        @media (max-width: 1024px) {
            display: flex !important;
        }
    }
}

.burger__menu {
    display: flex;
    align-items: center;
    height: 28px;
    gap: 8px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #553280;
    cursor: pointer;
}

.navbar-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 10%;
    @media (max-width:  1280px) {
        gap: 40px;
    }

    @media (max-width: 1024px) {
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        overflow-y: hidden;
        overflow-x: auto;
        padding-bottom: 8px;
    }

    a {
        font-weight: 700;
        font-size: 16px;
        white-space: nowrap;
        color: #323234;

        &:hover {
            transition: .3s;
            color: #FFD600;
        }
    }
}

.navbar-list::-webkit-scrollbar {
    height: 2px;
}

/* ===== favorite ===== */

// .favorite {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     position: relative;

//     @media (max-width: 1024px) {
//         display: none;
//     }
// }

// .favorite p {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 150%;
//     color: #232323;
// }

// .favorite__count {
//     font-weight: 400;
//     font-size: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1px;
//     color: #232323;
//     background: #FFD600;
//     border-radius: 50%;
//     width: 14px;
//     height: 14px;
//     position: absolute;
//     top: -2px;
//     left: -6px;
// }

// .favorite:hover .favorite__count {
//     color: white;
//     transition: .3s;
// }
</style>