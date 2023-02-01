<template>
    <div class="CardStyle">
        <div>
            <div>
                <slot name="image"></slot>
            </div>
            <div class="mt-2">
                <slot name="sarlovha"></slot>
            </div>
        </div>
        <div class="d-flex">
            <slot name="catagory"></slot>
            <slot name="time"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.CardStyle {
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (max-width: 992px) {
    .CardStyle{
        min-height: 300px;
    }
}
@media screen and (max-width: 480px) {
    .CardStyle{
        min-height: 250px;
    }
}
</style>