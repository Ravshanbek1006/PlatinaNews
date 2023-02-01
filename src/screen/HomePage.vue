<template>
  <div class="container mt-4">
    <section class="row card-p section-bg">
      <div class="col-lg-8  col-md-12  col-sm-12 ">
        <div>
          <img class="img-class" src="@/assets/homeimg/Rectangle238.png" alt="">
        </div>
        <h3>
          Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди
        </h3>
        <p class="h-p">
          2023 йил 2 январь куни Тошкент – Олмаота йўналиши бўйича КC128 рейсини амалга ошириш чоғида «Air Astana»
          авиакомпаниясининг самолёти Чимкент парвозларни бошқариш маркази ҳудудида 350 (10600 м) баландликда кучли
          турбулентликка учради. Самолёт...
        </p>
        <div>
          <span class="me-4 text-warning font-weight-normal">Жамият</span>
          <span class="i-b-p">2 кун олдин</span>
        </div>
        <hr>
        <div class="row py-2">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <CardItem>
              <template #image>
                <img style="width: 100%; object-fit: cover;" src="@/assets/homeimg/Rectangle238 (1).png">
              </template>
              <template #sarlovha>
                <h4>Францияда 700 га яқин машина ёқиб юборилди</h4>
              </template>
              <template #catagory>
                <p class="jaxon me-4">Жаҳон </p>
              </template>
              <template #time>
                <p class="i-b-p">2 кун олдин</p>
              </template>
            </CardItem>
          </div>
          <div class="col-lg-6  col-md-6 col-sm-12">
            <CardItem>
              <template #image>
                <img style="width: 100%; object-fit: cover;" src="@/assets/homeimg/Rectangle238 (2).png">
              </template>
              <template #sarlovha>
                <h4>Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди ҳаво маълумоти эълон
                  қилинди</h4>
              </template>
              <template #catagory>
                <p class="jamiyat me-4">Жамият </p>
              </template>
              <template #time>
                <p class="i-b-p">2 кун олдин</p>
              </template>
            </CardItem>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12  col-sm-12 ">
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-center align-items-center ">
            <b-icon icon="dot" class="me-2" scale="4" style="color:var(--paragraf-color)"></b-icon>
            <span class="newTitle">Сўнгги янгиликлар</span>
          </div>
          <div class="d-flex justify-content-center align-items-center ">
            <b-icon icon="arrow-right" class="me-2" scale="2" style="color:var(--paragraf-color)"></b-icon>
          </div>
        </div>
        <CardNews v-for="(item, index) in news" :key="index" :item="item" />
        <div>
          <img class="object-fit-cover w-100" src="@/assets/homeimg/ads.png" alt="sdasdas">
        </div>
      </div>
    </section>

    <section class="swiper-section container p-4 mt-4 section-bg">
      <div class="d-flex  align-items-center ">
        <b-icon icon="dot" class="me-2" scale="4" style="color:var(--paragraf-color)"></b-icon>
        <span class="newTitle">Сўнгги янгиликлар</span>
      </div>
      <hr>
      <carousel :speed=1000 :loop="true" :autoplay="true" :per-page="3" :navigate-to="someLocalProperty"
        :mouse-drag="true">
        <slide class="slider p-2" v-for="(element, index) in sliderItem" :key="index">
          <div class="d-flex flex-column justify-content-between">
            <img class="width:100% object-fit-cover " style="height: 250px;"
              :src="require(`@/assets/homeimg/${element.imgSlider}`)" alt="">
            <h4 class="mt-2">{{ element.title }}</h4>
          </div>
          <div class="d-flex mt-2">
            <p class="me-4 text-success " style="font-size: 14px; font-weight: 500;">Ўзбекистон</p>
            <p style="color: var(--text-time);"> 2 кун олдин</p>
          </div>
        </slide>
      </carousel>
    </section>

    <section class="sport container mt-4 p-4" style=" background-color:#fff;">
      <div class="d-flex justify-content-between ">
        <div class="d-flex  align-items-center align-items-lg-center ">
          <b-icon icon="dot" class="me-2" scale="4" style="color:var(--paragraf-color)"></b-icon>
          <span class="newTitle">#Sport</span>
        </div>

        <div class="d-flex  align-items-center ">
          <span class="newTitle me-3">Барчаси</span>
          <b-icon icon="arrow-right" class="me-2" scale="2" style="color:var(--paragraf-color)"></b-icon>
        </div>

      </div>
      <hr>
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <img class="object-fit-cover w-100" src="@/assets/Sport/sport1.png" alt="">
          <h3>Модрич Саудия клубининг таклифини рад қилди</h3>
          <div class="d-flex mt-4">
            <p class="me-4 text-danger " style="font-size: 14px; font-weight: 500;">Спорт</p>
            <p style="color: var(--text-time);"> 2 кун олдин</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <CardNewsSport v-for="(item, index) in newSport" :key="index" :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>


import CardItem from "@/components/CardItem.vue";
import CardNews from "@/components/CardNews.vue";
import CardNewsSport from "@/components/CardNewsSport.vue";
import { Carousel, Slide } from 'vue-carousel';


export default {
  components: {
    CardItem,
    CardNews,
    Carousel,
    Slide,
    CardNewsSport
  },
  data() {
    return {
      news: [
        {
          name: "Туркияда кўплаб авиарейслар туман сабаб бекор қилинди",
          catagory: "Жаҳон",
          status: "2 кун олдин",
          imgItem: "new6.png"
        },
        {
          name: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради",
          catagory: "Жамият",
          status: "2 кун олдин",
          imgItem: "new5.png"
        },
        {
          name: "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?",
          catagory: "Жамият",
          status: "2 кун олдин",
          imgItem: "new4.png"
        },
        {
          name: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади",
          catagory: "Жамият",
          status: "2 кун олдин",
          imgItem: "new3.png"
        },
        {
          name: "Air Astana авиакомпаниясининг Тошкент-Олмаота рейси йўловчилари жабрланди",
          catagory: "Жамият",
          status: "2 кун олдин",
          imgItem: "new2.png"
        },
        {
          name: "Air Astana авиакомпаниясининг Тошкент-Олмаота рейси йўловчилари жабрланди",
          catagory: "Жамият",
          status: "2 кун олдин",
          imgItem: "new1.png"
        },
      ],
      sliderItem: [
        {
          title: "“Амбронол” сиропи ҳам сотувдан олинмоқда",
          imgSlider: "s1.png"
        },
        {
          title: "Вакант лавозимларга энг кўп очиқ танлов ўтказган ташкилотлар маълум қилинди",
          imgSlider: "s2.png"
        },
        {
          title: "“Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев",
          imgSlider: "s3.png"
        },
        {
          title: "2023 йилдаги қўшимча дам олиш кунлари белгиланди",
          imgSlider: "s4.png"
        },
        {
          title: "“Амбронол” сиропи ҳам сотувдан олинмоқда",
          imgSlider: "s1.png"
        },
        {
          title: "Вакант лавозимларга энг кўп очиқ танлов ўтказган ташкилотлар маълум қилинди",
          imgSlider: "s2.png"
        },
        {
          title: "“Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев",
          imgSlider: "s3.png"
        },
        {
          title: "2023 йилдаги қўшимча дам олиш кунлари белгиланди",
          imgSlider: "s4.png"
        },
      ],
      newSport: [
        {
          name: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          catagory: "Спорт",
          status: "2 кун олдин",
          imgItem: "sport2..png"
        },
        {
          name: "Луис Суарес «Гремио» билан шартнома имзолади",
          catagory: "Спорт",
          status: "2 кун олдин",
          imgItem: "sport3.png"
        },
        {
          name: "Криштиану Роналду «Ан Наср» билан икки йиллик шартнома имзолади",
          catagory: "Спорт",
          status: "2 кун олдин",
          imgItem: "sport4.png"
        },
        {
          name: "Роналду ва Рамос битта жамоада фаолиятини давом эттириши мумкин",
          catagory: "Спорт",
          status: "2 кун олдин",
          imgItem: "sport5.png"
        },
        {
          name: "Элдор Шомуродов «Торино»га ўтиши мумкин",
          catagory: "Спорт",
          status: "2 кун олдин",
          imgItem: "sport6.png"
        },
        
      ]
    }

  }

}
</script>

<style scoped>
/*  */
.newTitle {
  font-size: 24px;
  font-weight: 700;
  color: var(--paragraf-color);
}

.section-bg {
  background-color: #fff;
}

@media screen and (max-width: 992px) {
  h3 {
    font-size: 30px;
  }

}

@media screen and (max-width: 480px) {
  h3 {
    font-size: 20px;
  }

}
</style>