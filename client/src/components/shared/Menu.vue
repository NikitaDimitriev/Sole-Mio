<template>
  <div id="menu">
    <div class="pin-to-top" :class="{scrolled: scrolled}">
      <div class="top-menu">
        <div class="top-menu-left">
          <i class="fa fa-bars burger" @click="openNav()"></i>
          <span class="menu-title" @click="openNav()">MENU</span>
        </div>
        <div>
          <span>  </span>
        </div>
        <div class="top-menu-logo">
          <router-link to="/">
            <img src="@/assets/image/logo-white.png" v-if="!scrolled">
            <img src="@/assets/image/Logo_SoleMia_color.png" v-if="scrolled">
          </router-link>
        </div>
        <div class="top-menu-right">
          <a
            href="https://facebook.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
          <div class="language-choose">
            <span @click="changeToRu()">RU</span>
            |
            <span @click="changeToEn()">EN</span>
          </div>
      </div>
    </div>
    <div id="mySidenav" class="sidenav">
      <span class="closebtn" @click="closeNav()">
        &times;
        <span style="font-size: 12px">MENU</span>
      </span>
      <router-link to="/" v-if="getLanguage === 'ru'">Главная</router-link>
      <router-link to="/project" v-if="getLanguage === 'ru'">Проект</router-link>
      <router-link to="/contact" v-if="getLanguage === 'ru'">Контакты</router-link>
      <router-link to="/" v-if="getLanguage === 'en'">Main Page</router-link>
      <router-link to="/project" v-if="getLanguage === 'en'">Project</router-link>
      <router-link to="/contact" v-if="getLanguage === 'en'">Contacts</router-link>
      <!-- <router-link to="/service">Сервис</router-link> -->
      <!-- <router-link to="/news">Новости</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeMenu: false,
      scrolled: false
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "40%";
      document.getElementById("mySidenav").style.padding = "60px 0 0 125px";
      document.getElementById("mySidenav").style.zIndex = "6";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.padding = "0";
      document.getElementById("mySidenav").style.zIndex = "0";
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    changeToRu() {
      localStorage.removeItem("language");
      localStorage.setItem("language", "ru");
      window.location.reload();
    },
    changeToEn() {
      localStorage.removeItem("language");
      localStorage.setItem("language", "en");
      window.location.reload();
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    getLanguage() {
      return localStorage.getItem("language");
    }
  }
};
</script>

<style lang="css">
.pin-to-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
}
.scrolled {
  background-color: #fff;
  color: #000;
  transition: 0.5s;
}
.top-menu {
  display: flex;
  padding: 24px 125px 0 125px;
  height: 130px;
  justify-content: space-around;
  background-color: transparent;
}
.top-menu-left {
  justify-content: space-between;
  margin-top: 51px;
}
.menu-title {
  font-family: "Clear Sans Bold", sans-serif;
  margin-left: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
}

.menu-title:hover {
  color: #fcd000;
}

.top-menu-right {
  margin-top: 51px;
  justify-content: flex-end;
}
.sidenav {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  width: 0;
  padding: 0;
}

.sidenav a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  transition: 0.3s;
  font-family: "Clear Sans Bold";
  margin-top: 50px;
}

.sidenav a:hover {
  color: #818181;
}

.sidenav .closebtn {
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 125px;
  font-size: 36px;
  cursor: pointer;
  font-family: "Clear Sans Bold";
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
  color: #fff;
  font-size: 22px;
}
.top-menu-right i:hover {
  color: #fcd000;
  cursor: pointer;
}

.burger {
  font-size: 22px;
  color: #fff;
  cursor: pointer;
}

.burger:hover {
  color: #fcd000;
}
.scrolled .burger {
  color: #000;
}
.scrolled .menu-title {
  color: #000;
}
.scrolled i {
  color: #000;
}
.language-choose {
  font-size: 12px;
  letter-spacing: 0px;
  color: #fff;
  font-family: "Clear Sans Thin";
  margin-top: 70px;
  cursor: pointer;
}
.scrolled .language-choose {
  color: #cacaca;
}
</style>
