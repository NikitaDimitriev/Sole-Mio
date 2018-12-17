<template>
  <div id="service-page">
    <div id="menu">
      <div class="pin-to-top" style="background: #fff;">
        <div class="top-menu">
          <div class="top-menu-left">
            <i class="fa fa-bars burger" @click="openNav()" style="cursor: pointer"></i>
            <span class="menu-title">MENU</span>
          </div>
          <div class="top-menu-logo">
            <img src="@/assets/image/logo-blue.png">
          </div>
          <div class="top-menu-right">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-vk"></i>
            <i class="fa fa-instagram"></i>
          </div>
        </div>
      </div>
      <div id="mySidenav" class="sidenav">
        <a class="closebtn" @click="closeNav()">&times;</a>
        <router-link to="/">Главная</router-link>
        <router-link to="/project">Проект</router-link>
        <router-link to="/contact">Контакты</router-link>
        <router-link to="/service">Сервис</router-link>
        <router-link to="/news">Новости</router-link>
      </div>
    </div>
    <div class="contact-container">
      <img src="@/assets/image/title_service.png" class="sevice-page-img">
      <div class="service-container-text">
        <span class="contact-container-title">Сервисы</span>
        <span class="contact-container-subtitle">Ознакомтесь с нашими сервисами</span>
      </div>
    </div>
    <div class="bitch">
      <span class="bitch-title">Пхукет самый
        <br>живописный остров
        <br>востока
      </span>
      <div class="line"></div>
      <div class="bitch-text">
        Райские пляжи с бархатным белым песком — главная достопримечательность острова Пхукет в Таиланде. Пляжей здесь много, при этом двух похожих не найти. Одни радуют тишиной и умиротворенной атмосферой, на других никогда не заканчивается вечеринка. Есть длинные белоснежные пляжи и крохотные бухты, спрятанные между прибрежных скал. Об одних известно каждому туристу, а другие знают только местные. Словом, прелесть Пхукета в том, что каждый здесь может найти пляж по душе. Все о пляжах Пхукета — в нашем обзоре.
        <button
          class="button"
        >ЧИТАТЬ БОЛЬШЕ</button>
      </div>
      <div class="service-slider">
        <div class="service-slide1">
          <img src="@/assets/image/service1.png" class="sliderImg">
          <div class="service-slide1-content">
            <span class="service-slide1-title">Самые чистые пляжи востока</span>
            <div class="slide1-card">
              <div class="indicators-service">
                <span style="margin-right: 5px">&#10229;</span>
                <span>&#10230;</span>
              </div>
              <div class="controll-numbers" style="margin-top: 15px; margin-bottom: 54px;">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
              </div>
              <span class="slide1-card-title">ПАТОНГ</span>
              <span
                class="slide1-card-text"
              >Пляж Патонг самый популярный на Пхукете и привлекает преимущественно молодежь и мужчин средних лет.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="features">
      <span class="features-title" style="margin-top:84px">Особенности комплекса</span>
      <br>
      <span class="features-title" style="font-family: 'Clear Sans Bold'">Solo Mia</span>
      <div class="features-right">
        <span class="features-number">01</span>
        <span class="features-title-right">Современный басейн</span>
        <span class="features-text-right">
          Современный дизайн бассейна уже давно перестал быть похожим на привычный многим прямоугольный водоем, который становится глубже по направлению от одного его края к другому. Бассейн наряду с собственным прямым назначением сегодня играет также роль привлекательного элемента ландшафтного дизайна.
          За идеями и вдохновением архитекторы обратились к создателям традиций Древнего Рима.
        </span>
        <button class="button button-features-right">ЧИТАТЬ БОЛЬШЕ</button>
        <img src="@/assets/image/01.png" class="features-img-right">
      </div>
      <div class="features-left">
        <span class="features-number">02</span>
        <span class="features-title-left">КОМФОРТНЫЙ SPA САЛОН </span>
        <span class="features-text-left">
          Спа — метод физиотерапии, связанный с водой. Иногда используется для обозначения таких понятий, как водолечение, бальнеотерапия, талассотерапия и даже псаммотерапия. Спа-курорты — это города, которые предлагают лечение минеральными и морскими водами, водорослями и солями, лечебными грязями и целебными растениями.
        </span>
        <button class="button button-features-left">ЧИТАТЬ БОЛЬШЕ</button>
        <img src="@/assets/image/02.png" class="features-img-left">
      </div>
      <div class="features-right">
        <span class="features-number">03</span>
        <span class="features-title-right">ПРОФЕССИОНАЛЬНЫЙ ДОКТОР</span>
        <span class="features-text-right">
          Доктор — галлифрейский повелитель времени и искатель приключений на свою задницу. Гиперактивен (два сердца — особенность вида), харизматичен, скрывает своё имя. (Что особо характерно, «Доктор» — просто прозвище, которое он, как и все будущие повелители времени, выбрал себе в возрасте восьми лет). Сбежал с родной планеты, которая в то время исповедовала политику изоляционизма, на украденной из музея антикварной ТАРДИС, захватив с собой свою 15-летнюю внучку. 

        </span>
        <button class="button button-features-right">ЧИТАТЬ БОЛЬШЕ</button>
        <img src="@/assets/image/03.png" class="features-img-right">
      </div>
      <div class="features-left">
        <span class="features-number">04</span>
        <span class="features-title-left">МАГАЗИН</span>
        <span class="features-text-left">
          Что представляет собой современный магазин, какие его отличительные особенности и тенденции развития? В первую очередь, когда речь идет о современном магазине, мы говорим о массовых магазинах, независимо от их сферы деятельности: продукты, промтовары, одежда и др. Можно однозначно определить, что современный конкурентоспособный магазин должен быть УДОБНЫМ, причем удобным как для покупателя, так и для руководства и собственника.

        </span>
        <button class="button button-features-left">ЧИТАТЬ БОЛЬШЕ</button>
        <img src="@/assets/image/04.png" class="features-img-left">
      </div>
    </div>
    <div id="contacts">
      <div class="contacts-side">
        <span class="contacts-side-title">
          Railand Property
          International Co., Ltd.
        </span>
        <span class="contacts-side-text">
          47 Lagoon Road, Cherngtalay, Thalang,
          Phuket 83110, Thailand
        </span>
        <span class="contacts-side-text">
          Тел/факс: 8-10-66-7632-44-48;
          +66-84-84-55-111.
          info@solemia.pro
        </span>
        <span
          class="contacts-side-title"
          style="text-align: center; margin-top: 30px; font-size:24px"
        >Связаться с нами</span>
        <div class="contacts-input">
          <div class="group">
            <input type="text" required v-model="name">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Имя</label>
          </div>

          <div class="group">
            <input type="text" required v-model="email">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
          </div>

          <div class="group">
            <input type="text" required v-model="coment">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Коментарий</label>
          </div>
        </div>
        <div class="contacts-footer">
            <div class="button" @click="send()">
            <p class="text-button">ОТПРАВИТЬ</p>
            </div>
        </div>
      </div>
      <div class="contacts-map">
          <Map></Map>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "./shared/Map";
export default {
  components: {
    Map
  },
  data() {
    return {
      activeMenu: false,
      name: '',
      email: '',
      coment: ''
    };
  },
  methods: {
    send() {
      let data = {
        name: this.name,
        email: this.email,
        coment: this.coment
      };
      console.log(data);
      this.$axios
        .post("https://solemiaphuket.herokuapp.com/api/send-mail", data)
        .then(response => {
          console.log(response);
        });
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>
<style>
.service-container-text {
  display: flex;
  flex-direction: column;
  margin-top: 275px;
}

.sevice-page-img {
  width: 100%;
  height: 450px;
  top: 0;
  left: 0;
  position: absolute;
}

.bitch {
  height: 1368px;
  background-color: #f0f0f0;
  margin-top: -250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bitch-title {
  font-size: 48px;
  letter-spacing: 1px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
}
.line {
  margin-top: 15px;
  width: 254px;
  border-bottom: 3px solid black;
}

.bitch-text {
  width: 726px;
  height: 252px;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  color: #525252;
  font-family: "Clear Sans Thin";
  margin-top: 20px;
}

.service-slider {
  position: relative;
  min-width: 1100px;
  margin-top: 50px;
  height: 500px;
}

.sliderImg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 482px;
  height: 415px;
}

.slide1-card {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 730px;
  height: 414px;
  box-shadow: 0px 1px 43px rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 75px 132px 102px 164px;
}

.slide1-card-title {
  font-size: 30px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  display: block;
}

.slide1-card-text {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  color: #525252;
  font-family: "Clear Sans Thin";
}

.service-slide1-title {
  top: 4%;
  left: 50%;
  position: absolute;
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold", sans-serif;
  font-weight: bold;
}
.controll-numbers span {
  font-size: 14px;
  letter-spacing: 1px;
  color: #aeaeae;
  font-family: "Clear Sans Thin";
  margin-right: 10px;
}

.features {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 3135px;
}

.features-title {
  font-size: 48px;
  letter-spacing: 1px;
  color: #000000;
  font-family: "Clear Sans Thin";
  text-align: center;
}
.features-right {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 350px;
}
.features-right .features-number-right {
  position: absolute;
  top: 0;
  left: 0;
}

.features-left {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 350px;
}
.features-left .features-number {
  position: absolute;
  top: 0;
  right: 0;
}

.features-number {
  font-size: 300px;
  letter-spacing: -30px;
  color: #e3e3e3;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}

.features-title-right {
  line-height: 18px;
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  margin-left: 38px;
  z-index: 1;
  margin-top: 100px;
}
.features-title-left {
  line-height: 18px;
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  position: absolute;
  top: 100px;
  right: 380px;
  z-index: 1;
  margin-top: 30px;
}
.features-text-right {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  color: #525252;
  font-family: "Clear Sans";
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 100px;
  width: 564px;
}

.features-text-left {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  color: #525252;
  font-family: "Clear Sans Thin";
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 100px;
  width: 564px;
}

.button-features-right {
  position: absolute;
  top: calc(50% + 300px);
  left: 164px;
}

.button-features-left {
  position: absolute;
  top: calc(50% + 300px);
  right: 164px;
}

.features-img-right {
  position: absolute;
  right: 0px;
  top: 30%;
}

.features-img-left {
  position: absolute;
  left: 0px;
  top: 20%;
}
</style>
