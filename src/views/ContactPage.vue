<script setup>
import Contacts from '../components/Contacts.vue'

</script>

<script>
export default {
    component: {
        Contacts,
    }
}
</script>

<template>
    <div class="contact__page">
        <div class="content container">
            <div class="page__router">
                <a @click="$router.push('/')" href="#">Trang chủ</a>
                <!-- <span> / Контакты</span> -->
            </div>
            <Contacts />
        </div>
    </div>
</template>