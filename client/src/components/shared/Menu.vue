<template>
  <div id="menu">
    <div class="pin-to-top">
      <div class="top-menu">
        <div class="top-menu-left">
          <!-- <button
            class="hamburger hamburger--collapse"
            type="button"
            @click="activeMenu = !activeMenu"
            :class="{'is-active': activeMenu}"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>-->
          <i class="fa fa-bars" @click="openNav()"></i>
          <span class="menu-title">MENU</span>
        </div>
        <div class="top-menu-logo">
          <img src="@/assets/image/logo.png">
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
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
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
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style lang="css">
/* #menu{
    width: 100%;
    height: 100%;
} */
.pin-to-top {
  position: absolute;
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
  padding: 24px 130px 0 130px;
  height: 130px;
  justify-content: space-between;
  background-color: transparent;
}
.top-menu-left {
  justify-content: space-between;
}
.menu-title {
  margin-left: 20px;
}
.top-menu-right {
  width: 200px;
  justify-content: space-around;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
