<template>
  <div id="menu">
    <div class="top-menu">
      <div class="top-menu-left">
        <button
          class="hamburger hamburger--collapse"
          type="button"
          @click="activeMenu = !activeMenu"
          :class="{'is-active': activeMenu}"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
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
    <div id="carousel" class="carousel">
      <div class="slides">
        <div class="slide" data-state="active">Slide 1</div>
        <div class="slide">Slide 2</div>
        <div class="slide">Slide 3</div>
      </div>
      <div class="indicators">
        <input
          class="indicator"
          name="indicator"
          data-slide="1"
          data-state="active"
          checked
          type="radio"
        >
        <input class="indicator" name="indicator" data-slide="2" type="radio">
        <input class="indicator" name="indicator" data-slide="3" type="radio">
      </div>
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
  }
};
</script>

<style lang="css">
.hamburger:focus {
  outline: none;
}
.top-menu {
  display: flex;
  padding: 24px 130px 0 130px;
  justify-content: space-between;
  background-color: black;
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
.carousel {
  position: relative;
  height: 400px;
  width: 750px;
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

.slide:nth-child(1) {
    background-color: red;
    opacity: 1;
}

.slide:nth-child(2) {
    background-color: green;
}

.slide:nth-child(3) {
    background-color: blue;
}

.slide[data-state=active] {
  display: block;
}

.indicators {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.indicator {
    cursor: pointer;
}
</style>
