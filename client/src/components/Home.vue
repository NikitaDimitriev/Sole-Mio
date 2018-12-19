<template>
  <div id="home">
    <Menu></Menu>
    <div id="carousel" class="carousel">
      <div class="slides">
        <div class="slide" data-state="active">
          <div class="slide1-content">
            <div class="slide1-content-inner">
              <span class="slide1-title">Добро пожаловать на борт –</span>
              <span class="slide1-title">Sole Mio поднимает паруса</span>
              <span
                class="slide1-subtitle"
              >Девелоперам на Пхукете приходится прикладывать немало усилий, чтобы выделить свои</span>
              <span
                class="slide1-subtitle"
              >проекты из общего ряда предложений на богатом рынке островной недвижимости.</span>
            </div>
          </div>
          <img
            src="@/assets/image/titel_img.png"
            style="height: 100%; width: 100%"
            class="background-slider"
          >
        </div>
        <div class="slide">Slide 2</div>
        <div class="slide">Slide 3</div>
      </div>
      <div class="indicators">
        <span style="margin-right: 5px">&#10229;</span>
        <span>&#10230;</span>
      </div>
    </div>
    <div id="concept">
      <div class="concept-content">
        <span class="concept-content-title">КОНЦЕПЦИЯ И ФИЛОСОФИЯ</span>
        <div class="concept-content-text-section">
          <span
            class="concept-content-text"
          >Девелоперам на Пхукете приходится прикладывать немало усилий, чтобы выделить свои проекты из общего ряда предложений на богатом рынке островной недвижимости.</span>
          <span
            class="concept-content-text"
          >Кондоминиум Sole Mio – тот редкий случай, когда ничего делать не надо. Достаточно одного взгляда на это сочетание круизного лайнера и жилого комплекса, чтобы убедиться, насколько он уникален.</span>
          <span
            class="concept-content-text"
          >Новый кондоминиум Sole Mio у пляжа Банг-Тао может похвастаться немалым набором козырей. Начать стоит с расположения – всего 150 м по прямой линии от пляжа и 300 м неспешным шагом по удобному маршруту.</span>
          <span
            class="concept-content-text"
          >Пляж сам по себе тоже примечателен, поскольку речь идет о том участке Банг-Тао (второго по протяженности пляжа Пхукета), где до сих пор жива аутентичная пхукетская атмосфера. Вдоль побережья выстроились небольшие местные ресторанчики и регги-бары, где приятно будет встретить закат за едой и напитками на ласкающем ноги теплом песке. Если же хочется чего-то уровнем повыше, то достаточно небольшой прогулки к югу, где расположился Catch, один из лучших пляжных клубов острова. А на небольшом расстоянии к северу находится широкий ассортимент люксовых отелей Лагуны, славящейся своими изысканным ресторанами, СПА-центрами и полями для гольфа.</span>
        </div>
        <!-- <div class="button">
          <p class="text-button">ЧИТАТЬ БОЛЬШЕ</p>
        </div>-->
      </div>
    </div>
    <div id="complex">
      <div class="complex-card">
        <span class="complex-card-title">
          Современный
          компелекс на
        </span>
        <span class="complex-card-title" style="font-family: 'Anglecia Pro Display Bold'">
          лазурном берегу
          Пхукета
        </span>
        <div class="complex-content-text-section">
          <span class="concept-content-text">
            Sole Mio Condominium является совместным проектом надежной команды известных экспертов по
            недвижимости на острове Пхукет – девелоперской компании Phuket Asialand и агентства
            недвижимости Railand Property International.
          </span>
          <!-- <div class="button" style="border: none; margin-top: 30px">
            <p class="text-button">ЧИТАТЬ БОЛЬШЕ</p>
          </div>-->
        </div>
      </div>
      <div class="complex-img">
        <img src="@/assets/image/complex-img.png" alt srcset>
      </div>
    </div>
    <div id="apartments">
      <span class="apartments-title">АППАРТАМЕНТЫ</span>
      <div class="cards-section">
        <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
          <li class="cards__item">
            <div class="card">
              <div class="card__top">
                <div class="card__slider">
                  <div class="card__slider-item">
                    <img alt="аппартамены" src="@/assets/image/Photo_2.png">
                  </div>
                </div>
              </div>
              <div class="card__content">
                <div class="card__body">
                  <h3 class="card__title">Апартаменты с видом на море в Ката</h3>
                  <ul class="card__l">
                    <li>Жилая площадь: от 200 м2</li>
                    <li>Спален: 2</li>
                  </ul>
                </div>
                <div class="card__footer">
                  <div class="price price__bl">$ 46 000</div>
                  <button class="button">СМОТРЕТЬ</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards__item">
            <div class="card">
              <div class="card__top">
                <div class="card__slider">
                  <div class="card__slider-item">
                    <img alt="аппартамены" src="@/assets/image/Photo_1.png">
                  </div>
                </div>
              </div>
              <div class="card__content">
                <div class="card__body">
                  <h3 class="card__title">Апартаменты с видом на море в Ката</h3>
                  <ul class="card__l">
                    <li>Жилая площадь: от 200 м2</li>
                    <li>Спален: 2</li>
                  </ul>
                </div>
                <div class="card__footer">
                  <div class="price price__bl">$ 761 000</div>
                  <button type="button" class="button">СМОТРЕТЬ</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards__item">
            <div class="card">
              <div class="card__top">
                <div class="card__slider">
                  <div class="card__slider-item">
                    <img alt="аппартамены" src="@/assets/image/Photo1.png">
                  </div>
                </div>
              </div>
              <div class="card__content">
                <div class="card__body">
                  <h3 class="card__title">Апартаменты с видом на море в Ката</h3>
                  <ul class="card__l">
                    <li>Жилая площадь: от 200 м2</li>
                    <li>Спален: 2</li>
                  </ul>
                </div>
                <div class="card__footer">
                  <div class="price price__bl">$ 550 000</div>
                  <button type="button" class="button">СМОТРЕТЬ</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="projects">
      <span class="projects-title">РЕАЛИЗОВАНЫЕ ПРОЕКТЫ</span>
      <div class="projects-img" style="margin-top: 30px">
        <img src="@/assets/image/Surin.png" alt>
        <img src="@/assets/image/NewBandW.jpeg" alt>
        <img src="@/assets/image/Andamaya_Logo.jpg" alt>
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
          Тел/факс: +66 81 73 71 687;
          +66 84 84 22 111.
          sale@solemiophuket.com
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
            <label style="font-family: 'Clear Sans Thin'">Имя</label>
          </div>

          <div class="group">
            <input type="text" required v-model="email">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label style="font-family: 'Clear Sans Thin'">Email</label>
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
    <Footer></Footer>
  </div>
</template>
<script>
import Menu from "./shared/Menu";
import Map from "./shared/Map";
import Footer from "./shared/Footer";
export default {
  components: {
    Menu,
    Map,
    Footer
  },
  data() {
    return {
      name: "",
      email: "",
      coment: ""
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
    }
  }
};
</script>
<style lang="css">
.carousel {
  position: relative;
  height: 100vh;
  width: 100wh;
}

.slides {
  height: 100%;
  width: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-size: 3em;
  color: white;
  line-height: 400px;
  text-align: center;
  opacity: 0;
  transition: opacity 1000ms;
}

.slide1-content {
  height: calc(100% - 150px);
  width: 100%;
  position: absolute;
  padding-top: 150px;
}

.slide1-title {
  font-size: 48px;
  letter-spacing: 1px;
  color: #fefefe;
  font-family: "Anglecia Pro Display", sans-serif;
  height: 48px;
}

.slide1-subtitle {
  height: 18px;
  font-size: 18px;
  color: #ffffff;
  font-family: "Clear Sans Thin";
}

.slide1-content-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.slide:nth-child(1) {
  background-image: url("");
  opacity: 1;
}

.slide:nth-child(2) {
  background-color: green;
}

.slide:nth-child(3) {
  background-color: blue;
}

.slide[data-state="active"] {
  display: block;
}

.indicators {
  position: absolute;
  bottom: 50px;
  right: 200px;
}
.indicators span {
  font-size: 36px;
  color: #ffffff;
  cursor: pointer;
}
#concept {
  background-color: #d5d5d5;
  width: 100%;
  height: 80vh;
}
.concept-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0 100px 0;
}
.concept-content-title {
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold", sans-serif;
  font-weight: bold;
}
.concept-content-text {
  font-size: 14px;
  line-height: 24px;
  color: #525252;
  font-family: "Clear Sans Thin", sans-serif;
  margin-bottom: 20px;
}
.concept-content-text-section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 768px;
  text-align: center;
  margin-top: 50px;
}

#complex {
  background: #e0e0e0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.complex-card {
  width: 580px;
  height: 495px;
  box-shadow: 0px 1px 43px rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 50px 0 20px 62px;
}

.complex-img {
  width: 575px;
  height: 420px;
}
.complex-card-title {
  font-size: 48px;
  letter-spacing: 2px;
  line-height: 60px;
  color: #000000;
  font-family: "Anglecia Pro Display", sans-serif;
}

.complex-content-text-section {
  margin-right: 80px;
  margin-top: 35px;
}

#apartments {
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.apartments-title {
  margin-top: 120px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}

#projects {
  height: 400px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.projects-title {
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  text-align: center;
}

#contacts {
  background: #f0f0f0;
  height: 840px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacts-side {
  width: 380px;
  height: 642px;
  background: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
}
.contacts-side-title {
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}
.contacts-side-text {
  margin-top: 10px;
  font-size: 14px;
  line-height: 28px;
  color: #000000;
  font-family: "Clear Sans Thin";
  font-weight: bold;
}

.group {
  position: relative;
  margin-bottom: 45px;
}

.group label{
   font-family: 'Clear Sans Thin';
}
input {
  font-size: 18px;
  font-family: "Clear Sans Thin";
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 300px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

.contacts-footer {
  display: flex;
  justify-content: center;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
.projects-img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.projects-img img {
  max-width: 300px;
}
.top-menu-logo {
  height: 100px;
  width: 106px;
}
.cards__item {
  margin-bottom: 120px;
}

.card__l {
  font-family: "Clear Sans Thin";
}
</style>