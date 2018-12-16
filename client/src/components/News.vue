<template>
  <div class="magazine">
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
    <div class="magazine__in inner">
      <div class="magazine__list rubs-list">
        <div class="articleX2">
            <img src="@/assets/image/news1.png"  style="width: 80%">
            <span></span>
            <span></span>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news2.png" width="250" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news3.png" width="350" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news4.png" width="350" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news5.png" width="350" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news6.png" width="350" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="@/assets/image/news7.png" width="350" height="180" alt>
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе
                <br>с Пхукетом
              </h3>
              <div
                class="n-item__txt"
              >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>
                  читать далее
                  <svg class="icon icon-arr">
                    <use xlink:href="img/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="rubs-list__footer catalog-page">
          <div class="catalog-page__navigation">
            <span class="catalog-page__first catalog-page__current">1</span>
            <a href class="catalog-page__link">2</a>
            <a href class="catalog-page__link">3</a>
            <a href class="catalog-page__link">4</a>
            <a href class="catalog-page__link">5</a>
            <a class="catalog-page__link catalog-page__line" href>-</a>
            <a href class="catalog-page__link">25</a>
            <a class="catalog-page__link catalog-page__next" href>&gt;&gt;</a>
          </div>
          <div class="catalog-page__navigation pagecount">
            <span class="catalog-page__title">Показывать по:</span>
            <span class="catalog-page__first catalog-page__current">10</span>
            <a class="catalog-page__link" href>20</a>
            <a class="catalog-page__link" href>50</a>
            <a class="catalog-page__link" href>100</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END magazine -->
</template>
<script>
import Menu from "./shared/Menu";
import Map from "./shared/Map";
export default {
  components: {
    Map
  },
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
<style>
.articleX2{
    margin-top: 150px;
    width: 100%; 
}
.magazine {
  background-color: #f3f3f3;
}
</style>
