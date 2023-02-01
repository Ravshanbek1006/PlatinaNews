<template>
    <div>
        <hr class="opacity-25">
        <div class="d-flex">
            <div class="col-10">
                <h4>{{ item.name }}</h4>
                <div class="d-flex">
                    <p class="text-danger me-3">{{ item.catagory }}</p>
                    <p>{{ item.status }}</p>
                </div>
                <!-- {{ item }} -->
            </div>
            <div class="col-2">
                <img class="newsImgs" :src="require(`@/assets/Sport/${item.imgItem}`)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']

}
</script>

<style>
.newsImgs {
    width: 100%;
    object-fit: cover;
}
</style>