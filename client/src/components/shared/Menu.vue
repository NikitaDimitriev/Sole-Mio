<template>
  <div id="menu">
    <div class="pin-to-top">
      <div class="top-menu">
        <div class="top-menu-left">
          <i class="fa fa-bars burger" @click="openNav()"></i>
          <span class="menu-title" @click="openNav()">MENU</span>
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
      <span class="closebtn" @click="closeNav()">&times; <span style="font-size: 12px"> MENU </span></span>
      <router-link to="/">Главная</router-link>
      <router-link to="/project">Проект</router-link>
      <router-link to="/contact">Контакты</router-link>
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
      activeMenu: false
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "40%";
      document.getElementById("mySidenav").style.padding = "60px 0 0 125px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.padding = "0";
    }
  }
};
</script>

<style lang="css">
.pin-to-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
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
  width: 40%;
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  padding-left: 125px;
}

.sidenav a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  transition: 0.3s;
  font-family: 'Clear Sans Bold';
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
  font-family: 'Clear Sans Bold';
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
  color: #fff;
  cursor: pointer;
}

.burger:hover {
  color: #fcd000;
}
</style>
