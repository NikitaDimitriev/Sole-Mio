<template>
  <div id="contact-page">
    <Menu></Menu>
    <div class="contact-container">
      <img src="@/assets/image/contact-bg.png" class="contact-page-img">
      <div class="contact-container-text">
        <span class="contact-container-title" v-if="getLanguage === 'ru'">Контакты</span>
        <span
          class="contact-container-subtitle"
          v-if="getLanguage === 'ru'"
        >Ответим на все ваши вопросы</span>
        <span class="contact-container-title" v-if="getLanguage === 'en'">Contacts</span>
        <span
          class="contact-container-subtitle"
          v-if="getLanguage === 'en'"
        >We will answer all your questions</span>
      </div>
    </div>
    <div id="contacts" style="margin-top: -300px">
      <div class="contacts-side" style="z-index:3; margin-top: -150px">
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
          v-if="getLanguage === 'ru'"
        >Связаться с нами</span>
        <span
          class="contacts-side-title"
          style="text-align: center; margin-top: 30px; font-size:24px"
          v-if="getLanguage === 'en'"
        >Contact us</span>
        <div class="contacts-input">
          <div class="group">
            <input type="text" required v-model="name">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label style="font-family: 'Clear Sans Thin'" v-if="getLanguage === 'ru'">Имя</label>
            <label style="font-family: 'Clear Sans Thin'" v-if="getLanguage === 'en'">Name</label>
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
            <label v-if="getLanguage === 'ru'">Коментарий</label>
            <label v-if="getLanguage === 'en'">Comment</label>
          </div>
        </div>
        <div class="contacts-footer">
          <div class="button" @click="send()">
            <p class="text-button" v-if="getLanguage === 'ru'">ОТПРАВИТЬ</p>
            <p class="text-button" v-if="getLanguage === 'en'">SEND</p>
          </div>
        </div>
      </div>
      <div class="contacts-map">
        <Map></Map>
      </div>
    </div>
    <Footer></Footer>
    <div class="confirm-wraper" v-if="modalActive">
      <div class="confirm">
        <i class="fa fa-times close-button" @click="deactiveteModal()"></i>
        <div class="confirm-title" v-if="getLanguage === 'ru'">Спасибо!</div>
        <div class="confirm-title" v-if="getLanguage === 'en'">Thank you!</div>
        <div class="confirm-subtitle" v-if="getLanguage === 'ru'">Наши менеджеры свяжуться с Вами</div>
        <div class="confirm-subtitle" v-if="getLanguage === 'en'">Our managers will contact you</div>
        <img src="@/assets/image/confirm-img.png" alt srcset>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "./shared/Map";
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
export default {
  components: {
    Map,
    Footer,
    Menu
  },
  data() {
    return {
      activeMenu: false,
      name: "",
      email: "",
      coment: "",
      modalActive: false
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
        .post("https://solemiophuket.herokuapp.com/api/send-mail", data)
        .then(response => {
          this.modalActive = true;
          this.name = "";
          this.email = "";
          this.coment = "";
        });
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    deactiveteModal(){
      this.modalActive = false;
    }
  },
  computed: {
    getLanguage() {
      return localStorage.getItem("language");
    }
  }
};
</script>
<style>
.close-button {
  position: absolute;
  top: -10%;
  right: -5%;
  font-size: 20px;
  cursor: pointer;
}
.contact-page-img {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.hamburger:focus {
  outline: none;
}
.top-menu {
  display: flex;
  padding: 24px 125px 0 125px;
  height: 130px;
  justify-content: space-between;
  background-color: transparent;
}
.top-menu-left {
  justify-content: space-between;
}
.menu-title {
  font-family: "Clear Sans Bold", sans-serif;
  margin-left: 20px;
  cursor: pointer;
}
.top-menu-right {
  justify-content: flex-end;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.top-menu-right i {
  margin: 15px;
  font-size: 18px;
}
.top-menu-right i:hover {
  color: #fcd000;
  cursor: pointer;
}

.burger:hover {
  color: #fcd000;
}
.contact-container {
  height: 415px;
  text-align: center;
  color: #fff;
}
.contact-container-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 175px;
}
.contact-container-title {
  font-size: 48px;
  letter-spacing: 4px;
  color: #ffffff;
  font-family: "Anglecia Pro Display";
  text-align: center;
  z-index: 2;
}

.contact-container-subtitle {
  font-size: 14px;
  color: #ffffff;
  font-family: "Clear Sans Thin";
  text-align: center;
  z-index: 2;
}

.confirm-wraper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirm {
  position: relative;
  width: 543px;
  /* height: 354px; */
  box-shadow: 0px 17px 43px rgba(0, 0, 0, 0.54);
  background-color: #ffffff;
  padding: 50px 95px 0 95px;
  z-index: 11;
  opacity: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.confirm-title {
  font-size: 60px;
  letter-spacing: 3px;
  color: #000000;
  z-index: 11;
  opacity: 1;
  font-family: "Anglecia Pro Display";
}
.confirm-subtitle {
  font-size: 18px;
  letter-spacing: 0px;
  color: #000000;
  font-family: "Clear Sans Thin";
  text-align: center;
  margin-bottom: 30px;
  z-index: 11;
  opacity: 1;
}
</style>
