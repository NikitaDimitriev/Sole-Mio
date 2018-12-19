<template>
  <div id="project-page">
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
            src="@/assets/image/2_Rooftop pool _ terrace.jpg"
            style="height: 100%; width: 100%"
            class="background-slider"
          >
          <!-- <img
            src="@/assets/image/3_Rooftop pool _ terrace.jpg"
            style="height: 100%; width: 100%"
            class="background-slider"
          >
          <img
            src="@/assets/image/6_Rooftop restaurant.jpg"
            style="height: 100%; width: 100%"
            class="background-slider"
          >
          <img
            src="@/assets/image/7_Rooftop fitness center.jpg"
            style="height: 100%; width: 100%"
            class="background-slider"
          >
          <img
            src="@/assets/image/10_Sole Mio reception.jpg"
            style="height: 100%; width: 100%"
            class="background-slider"
          >-->
        </div>
        <div class="slide">Slide 2</div>
        <div class="slide">Slide 3</div>
      </div>
      <div class="indicators">
        <span style="margin-right: 5px">&#10229;</span>
        <span>&#10230;</span>
      </div>
    </div>
    <div class="description-project">
      <div class="description-project-left">
        <span class="description-project-title">Описание проекта</span>
        <span
          class="description-project-text"
        >Девелоперам на Пхукете приходится прикладывать немало усилий, чтобы выделить свои проекты из общего ряда предложений на богатом рынке островной недвижимости.</span>
        <span
          class="description-project-text"
        >Кондоминиум Sole Mio – тот редкий случай, когда ничего делать не надо. Достаточно одного взгляда на это сочетание круизного лайнера и жилого комплекса, чтобы убедиться, насколько он уникален.</span>
        <span
          class="description-project-text"
        >Новый кондоминиум Sole Mio у пляжа Банг-Тао может похвастаться немалым набором козырей. Начать стоит с расположения – всего 150 м по прямой линии от пляжа и 300 м неспешным шагом по удобному маршруту.</span>
      </div>
      <div class="description-project-card">
        <ul>
          <li>Парковка</li>
          <li>Лобби/Ресепшен</li>
          <li>Рекреационный Центр</li>
          <li>Фитнес Зал</li>
          <li>
            Плавательный бассейн и терраса для
            принятия солнечных ванн на крыше
          </li>
          <li>Ресторан и Бар</li>
        </ul>
      </div>
    </div>
    <div class="advantages">
      <div class="advantages-card">
        <span class="advantages-card-title">
          Главные
          приемущества
          проекта
        </span>
        <div class="advantages-card-icon-section">
          <div class="advantages-icon-block">
            <!-- <i class="fas fa-beach">&#127796;</i> -->
            <img
              src="@/assets/image/island-with-palm-trees.svg"
              style="margin: 10px; margin-bottom: -2px"
            >
            <span class="icon-description">
              Месторасположение в одной из самых престижных и развитых курортных
              территорий острова Пхукет менее чем в 200 метрах от пляжа Банг Тао
            </span>
          </div>
          <div class="advantages-icon-block">
            <!-- <img src="@/assets/image/serviceIcon2.png" style="margin: 10px; margin-bottom: -2px"> -->
            <i class="fa fa-line-chart" style="font-size: 45px"></i>
            <span class="icon-description">Рост цен на квартиры на 30% к моменту запуска проекта</span>
          </div>
          <div class="advantages-icon-block">
            <i class="fa fa-pie-chart" style="font-size: 45px"></i>
            <span class="icon-description">Поэтапная рассрочка платежей и бесплатный пакет мебели</span>
          </div>
        </div>
        <div class="advantages-card-icon-section">
          <div class="advantages-icon-block">
            <!-- <img src="@/assets/image/serviceIcon4.png" style="margin: 10px; margin-bottom: -2px"> -->
            <i class="fa fa-money" style="font-size: 45px"></i>
            <span class="icon-description">Отсутсвие налогов на недвижимое имущество</span>
          </div>
          <div class="advantages-icon-block">
            <!-- <img src="@/assets/image/serviceIcon5.png" style="margin: 10px; margin-bottom: -2px"> -->
            <i class="fa fa-file-text-o" aria-hidden="true" style="font-size: 45px"></i>
            <span
              class="icon-description"
            >Отельная лицензия и прозрачная программа арендного управления</span>
          </div>
          <div class="advantages-icon-block">
            <i class="fa fa-share" aria-hidden="true" style="font-size: 45px"></i>
            <!-- <img src="@/assets/image/serviceIcon6.png" style="margin: 10px; margin-bottom: -2px"> -->
            <span
              class="icon-description"
            >От 7% ежегодного гарантированного возврата инвестиций в течение 5 лет</span>
          </div>
        </div>
      </div>
    </div>
    <div class="plan">
      <span class="plan-title">ПОЭТАЖНЫЙ ПЛАН И ТИП БЛОКОВ</span>
      <div class="plan-list-img">
        <div class="plan-list-item">
          <img src="@/assets/image/plan1.png">
          <span>Блок 1</span>
        </div>
        <div class="plan-list-item">
          <img src="@/assets/image/plan2.png">
          <span>Блок 2</span>
        </div>
        <div class="plan-list-item">
          <img src="@/assets/image/plan3.png">
          <span>Блок 3</span>
        </div>
        <div class="plan-list-item">
          <img src="@/assets/image/plan4.png">
          <span>Блок 4</span>
        </div>
        <div class="plan-list-item">
          <img src="@/assets/image/plan5.png">
          <span>Блок 5</span>
        </div>
      </div>
    </div>
    <div class="plan-a">
      <div class="plan-slider">
        <div class="service-slide1">
          <div class="service-slide1-content">
            <div class="slide1-card-plan-a">
              <div class="indicators-service">
                <span
                  style="margin-right: 5px;cursor: pointer"
                  @click="decreeceSliderAindex()"
                >&#10229;</span>
                <span @click="increeseSliderAindex()" style="cursor: pointer">&#10230;</span>
              </div>
              <div class="controll-numbers" style="margin-top: 15px; margin-bottom: 54px">
                <span style="cursor: pointer" @click="sliderAindex = 1">01</span>
                <span style="cursor: pointer" @click="sliderAindex = 2">02</span>
                <span style="cursor: pointer" @click="sliderAindex = 3">03</span>
                <span style="cursor: pointer" @click="sliderAindex = 4">04</span>
                <span style="cursor: pointer" @click="sliderAindex = 5">05</span>
              </div>
              <span class="plan-slider-title">
                Unit type A:
                Deluxe, 57 m2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-slider-img" v-if="sliderAindex === 1">
        <img src="@/assets/image/17_Deluxe.jpg" class="animateScale">
      </div>
      <div class="plan-slider-img" v-if="sliderAindex === 2">
        <img src="@/assets/image/18_Deluxe.jpg" class="animateScale">
      </div>
      <div class="plan-slider-img" v-if="sliderAindex === 3">
        <img src="@/assets/image/19_Deluxe.jpg" class="animateScale">
      </div>
      <div class="plan-slider-img" v-if="sliderAindex === 4">
        <img src="@/assets/image/20_Deluxe.jpg" class="animateScale">
      </div>
      <div class="plan-slider-img" v-if="sliderAindex === 5">
        <img src="@/assets/image/21_Deluxe.jpg" class="animateScale">
      </div>
    </div>
    <div class="plan-a-list">
      <div class="plan-a-list-left">
        <div class="plan-a-numered-list">
          <span>1. Entry</span>
          <span>2. Foyer</span>
          <span>4. Bathroom</span>
          <span>5. Living area</span>
          <span>6. Bedroom</span>
          <span>7. Balcony</span>
          <!-- <button class="button">Смотреть Больше</button> -->
        </div>
      </div>
      <img src="@/assets/image/Unit_type_A.png" style="float: right;height: 555px">
    </div>
    <div class="plan-a">
      <div class="plan-slider">
        <div class="service-slide1">
          <div class="service-slide1-content">
            <div class="slide1-card-plan-a">
              <div class="indicators-service">
                <span
                  style="margin-right: 5px; cursor: pointer"
                  @click="decreeceSliderBindex()"
                >&#10229;</span>
                <span @click="increeseSliderBindex()" style="cursor: pointer">&#10230;</span>
              </div>
              <div class="controll-numbers" style="margin-top: 15px; margin-bottom: 54px">
                <span style="cursor: pointer" @click="sliderBindex = 1">01</span>
                <span style="cursor: pointer" @click="sliderBindex = 2">02</span>
                <span style="cursor: pointer" @click="sliderBindex = 3">03</span>
                <span style="cursor: pointer" @click="sliderBindex = 4">04</span>
                <span style="cursor: pointer" @click="sliderBindex = 5">05</span>
              </div>
              <span class="plan-slider-title">
                Unit type B:
                Universal, 36 m2
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/image/12_Universal.jpg" v-if="sliderBindex === 1" class="animateScale">
      <img src="@/assets/image/13_Universal.jpg" v-if="sliderBindex === 2" class="animateScale">
      <img src="@/assets/image/14_Universal.jpg" v-if="sliderBindex === 3" class="animateScale">
      <img src="@/assets/image/15_Universal.jpg" v-if="sliderBindex === 4" class="animateScale">
      <img src="@/assets/image/16_Universal.jpg" v-if="sliderBindex === 5" class="animateScale">
    </div>
    <div class="plan-a-list">
      <div class="plan-a-list-left">
        <div class="plan-a-numered-list">
          <span>1. Entry</span>
          <span>2. Foyer</span>
          <span>3. Kitchen</span>
          <span>4. Dinnig area</span>
          <span>5. Living area</span>
          <span>6. Bedroom</span>
          <span>7. Badroom</span>
          <span>8. Balcony</span>
        </div>
      </div>
      <img src="@/assets/image/Unit_type_B.png" style="float: right;height: 555px">
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
      activeMenu: false,
      name: "",
      email: "",
      coment: "",
      sliderAindex: 1,
      sliderBindex: 1
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
    increeseSliderAindex() {
      this.sliderAindex++;
      if (this.sliderAindex > 5) {
        this.sliderAindex = 1;
      }
    },
    decreeceSliderAindex() {
      this.sliderAindex--;
      if (this.sliderAindex < 1) {
        this.sliderAindex = 5;
      }
    },
    increeseSliderBindex() {
      this.sliderBindex++;
      if (this.sliderBindex > 5) {
        this.sliderBindex = 1;
      }
    },
    decreeceSliderBindex() {
      this.sliderBindex--;
      if (this.sliderBindex < 1) {
        this.sliderBindex = 5;
      }
    }
  }
};
</script>
<style>
.description-project {
  background-color: #f0f0f0;
  padding: 50px 127px 50px 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
}

.description-project-left {
  flex-direction: column;
  justify-content: space-between;
}
.description-project-title {
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
  text-align: center;
}

.description-project-card {
  padding: 42px 122px 65px 62px;
  box-shadow: 0px 1px 43px rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
}

.description-project-text {
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: #525252;
  font-family: "Clear Sans Thin";
  margin-top: 25px;
  margin-right: 40px;
}

.description-project-card ul {
  list-style-type: disc;
  font-size: 14px;
  line-height: 30px;
  color: #525252;
  font-family: "Clear Sans Thin";
}

.advantages {
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.advantages-card {
  display: flex;
  background-color: #fff;
  width: 1240px;
  height: 340px;
  margin-bottom: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
}

.advantages-card-title {
  width: 30%;
  font-size: 30px;
  letter-spacing: 2px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}

.icon-description {
  margin-left: 15px;
  font-size: 18px;
  color: #525252;
  font-family: "Clear Sans Thins";
}
.advantages-card-icon-section {
  width: 30%;
}
.plan {
  width: 100%;
  background: #f0f0f0;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.plan-title {
  font-size: 18px;
  letter-spacing: 4px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}

.plan-list-img {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.plan-list-item {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.plan-list-item span {
  font-size: 14px;
  letter-spacing: 3px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}
.plan-list-img img {
  display: inline;
  margin: 25px;
}

.slide1-card-plan-a {
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

.plan-a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
}

.plan-a-list {
  padding: 130px;
  background-color: #f8f8f8;
}

.plan-slider {
  z-index: 1;
  margin-right: -50px;
}

.plan-slider-title {
  font-size: 54px;
  letter-spacing: 3px;
  color: #000000;
  font-family: "Anglecia Pro Display", serif;
}

.plan-a-list-left .plan-a-numered-list {
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 54px;
  color: #000000;
  font-family: "Clear Sans Bold";
  font-weight: bold;
}
.plan-a-list-left {
  width: 30%;
  float: left;
}
.plan-a-numered-list {
  display: flex;
  flex-direction: column;
}
.plan-a-list {
  height: 600px;
}
.advantages-icon-block {
  color: #000000;
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

.animateScale {
  animation: scale 0.5s;
}

.plan-slider-img {
  width: 975px;
  height: 650px;
}

@keyframes scale {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
