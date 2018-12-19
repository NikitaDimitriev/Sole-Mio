<template>
  <div id="contact-page">
    <div id="menu">
      <div class="pin-to-top" style="background: #fff;">
        <div class="top-menu">
          <div class="top-menu-left">
            <i class="fa fa-bars burger" @click="openNav()" style="cursor: pointer"></i>
            <span class="menu-title">MENU</span>
          </div>
          <div class="top-menu-logo">
            <img src="@/assets/image/sole-mio-logo3.png">
          </div>
          <div class="top-menu-right">
            <a
            href="https://facebook.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <!-- <i class="fa fa-twitter"></i> -->
          <!-- <i class="fa fa-vk"></i> -->
          <a
            href="https://instagram.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-instagram"></i>
          </a>
          </div>
        </div>
      </div>
      <div id="mySidenav" class="sidenav">
        <a class="closebtn" @click="closeNav()">&times;</a>
        <router-link to="/">Главная</router-link>
        <router-link to="/project">Проект</router-link>
        <router-link to="/contact">Контакты</router-link>
        <!-- <router-link to="/service">Сервис</router-link>
        <router-link to="/news">Новости</router-link> -->
      </div>
    </div>
    <div class="contact-container">
      <img src="@/assets/image/contact-bg.png" class="contact-page-img">
      <div class="contact-container-text">
        <span class="contact-container-title">Контакты</span>
        <span class="contact-container-subtitle">Ответим на все ваши вопросы</span>
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
          Тел/факс:  +66 81 73 71 687;
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
import Map from "./shared/Map";
import Footer from "./shared/Footer"
export default {
  components: {
    Map,
    Footer
  },
  data() {
    return {
      activeMenu: false,
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
.contact-page-img {
  width: 100%;
  /* margin-top: 130px; */
  top: 0;
  left: 0;
  position: absolute;
}
.pin-to-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
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
</style>
