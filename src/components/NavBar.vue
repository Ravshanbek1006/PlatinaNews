<template>
    <div style="background-color: #fff;">
        <div class="container p-0">
            <b-navbar toggleable="lg" type="dark" class="nav-container">
                <b-navbar-toggle class="gamburger" target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <div class="conteiner-fluid " style=" width: 100%;">
                        <b-navbar-nav class="ms-auto nav-box mt-2 mt-lg-0 p-3 p-lg-0">
                            <b-navbar-brand href="#"><img src="@/assets/brend.png" class="object-fit-cover"
                                    alt="brend"></b-navbar-brand>
                            <b-nav-form class="ms-auto w-100 px-4">
                                <b-form-input size="sm" class="mr-sm-2  input" placeholder="Search"></b-form-input>
                            </b-nav-form>
                            <b-button type="submit" style="background-color: #34AADF;"
                                class="d-flex  align-items-center mt-2 mt-lg-0">
                                <b-icon class="me-2" icon="telegram" scale="1"></b-icon>@platinauzb
                            </b-button>

                            <b-dropdown text="Ўзбекча" variant="outline-secondary"
                                class="dropdown-box ms-0 ms-lg-4 mt-2 mt-lg-0 " right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-dropdown>
                        </b-navbar-nav>

                        <b-navbar-nav class=" ms-auto nav-box mt-2 mt-lg-0 p-3 p-lg-0">

                            <b-nav-item class="nav-el me-4" variant="" href="#"><span
                                    class="Nav-item">Ўзбекистон</span></b-nav-item>
                            <b-nav-item class="nav-el me-4" variant="info" href="#"><span
                                    class="Nav-item">Жаҳон</span></b-nav-item>
                            <b-nav-item class="nav-el me-4" variant="info" href="#"><span
                                    class="Nav-item">Жамият</span></b-nav-item>
                            <b-nav-item class="nav-el me-4" variant="info" href="#"><span
                                    class="Nav-item">Таҳлил</span></b-nav-item>
                            <b-nav-item class="nav-el me-4" variant="info" href="#"><span
                                    class="Nav-item">Спорт</span></b-nav-item>
                            <b-nav-item class="nav-el me-4" variant="info" href="#"><span
                                    class="Nav-item">Медиа</span></b-nav-item>

                            <b-navbar-nav class="ms-lg-auto d-flex ">
                                <b-nav-item class="nav-el me-4 nav-item-box" variant="info" href="#">
                                    <span class="Nav-item"><b-icon icon="sun-fill" scale="1" variant="warning"
                                            class="me-2"></b-icon>+9°C</span>
                                </b-nav-item>
                                <b-nav-item class="nav-el " variant="info" href="#">
                                    <span class="Nav-item"> <img src="@/assets/USD.png" alt="usd" class="me-1"> USD
                                        <span style="color:red"> 11318.74<b-icon icon="arrow-down-right" scale="0.8"
                                                style="color:red"></b-icon></span></span>
                                </b-nav-item>
                            </b-navbar-nav>
                        </b-navbar-nav>

                    </div>


                    <!-- <b-navbar-nav class="ms-auto nav-box ">
                </b-navbar-nav> -->
                </b-collapse>
            </b-navbar>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.nav-container {
    background-color: #fff;
}

.nav-box {
    display: flex;
    align-items: center;
    width: 100%;
}

.gamburger {
    background-color: #adc5d0;
    margin: 0 0 0 auto;
}

.input {
    background-color: #F8F8FF;
    height: 38px;
}

.dropdown-box {
    background-color: #F8F8FF;
}

.nav-el {
    color: red !important;
}

.Nav-item {
    color: var(--paragraf-color);
    font-weight: 600;
    font-size: 17px;
}

.nav-item-box {
    display: flex;
    justify-content: center;
}
</style>