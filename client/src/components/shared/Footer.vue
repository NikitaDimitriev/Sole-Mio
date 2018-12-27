<template>
  <div id="footer">
    <div class="footer-top">
      <div class="footer-top-section1">
        <div class="footer-logo">
          <img src="@/assets/image/sole-mio-logo3.png">
        </div>
        <span style="color: #aaaaaa; font-size:18px" class="phones">
          <i class="fa fa-phone" style="margin-top: 15px;"></i> +66 81 73 71 687 <br>
          <i class="fa fa-phone" style="margin-top: 15px;"></i> +66 84 84 22 111 <br>
        </span>
        <p style="color: #aaaaaa; margin-top: 15px; margin-bottom: 15px;font-size:18px" >
          <i class="fa fa-envelope" aria-hidden="true"></i> sale@solemiophuket.com
        </p>
      </div>
      <div class="footer-top-section2">
        <p class="footer-section-title" v-if="getLanguage === 'ru'">РАЗДЕЛЫ</p>
         <p class="footer-section-title" v-if="getLanguage === 'en'">CATEGORIES</p>
        <p class="footer-section-text" v-if="getLanguage === 'ru'">> Главная</p>
        <p class="footer-section-text" v-if="getLanguage === 'ru'">> Проект</p>
        <p class="footer-section-text" v-if="getLanguage === 'ru'">> Контакты</p>
        <p class="footer-section-text" v-if="getLanguage === 'en'">> Main page</p>
        <p class="footer-section-text" v-if="getLanguage === 'en'">> About project</p>
        <p class="footer-section-text" v-if="getLanguage === 'en'">> Contacts</p>
      </div>
      <div class="footer-top-section3">
        <p class="footer-section-title" v-if="getLanguage === 'ru'">СОЦИАЛЬНЫЕ СЕТИ</p>
        <p class="footer-section-title" v-if="getLanguage === 'en'">Social networks</p>
        <p style="margin-bottom: 15px">
          <a
            href="https://facebook.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-facebook"></i> Facebook
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/solemiophuketcondominium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-instagram"></i> Instagram
          </a>
        </p>
      </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-bottom">
      <span>© Sole Mio Condominium Bang Tao Beach Phuket, 2018. All rights reserved</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    getLanguage(){
      return localStorage.getItem('language');
    }
  },
};
</script>
<style>
#footer {
  background-color: #111111;
  display: flex;
  flex-direction: column;
  padding: 40px 129px 45px 129px;
  /* height: 400px; */
}
.footer-line {
  border-bottom: 1px solid #e8e8e8;
  opacity: 0.3;
}
.footer-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.footer-logo {
  width: 71px;
  height: 77px;
}

.footer-top-section1 {
  display: flex;
  width: 33%;
  height: 100%;
  flex-direction: column;
}
.footer-top-section2 {
  width: 33%;
  display: flex;
  height: 100%;
  flex-direction: column;
}
.footer-top-section3 {
  font-size: 18px;
  color: #aaaaaa;
  font-family: "Clear Sans Thin";
  width: 33%;
  display: flex;
  height: 100%;
  flex-direction: column;
}
.footer-section-title {
  font-size: 16px;
  letter-spacing: 1px;
  color: #aaaaaa;
  font-family: "Clear Sans Bold";
  margin-bottom: 42px;
}
.footer-section-text {
  font-size: 12px;
  color: #aaaaaa;
  font-family: "Clear Sans Bold";
  margin-bottom: 21px;
}
.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #aaaaaa;
  font-family: "Clear Sans Thin";
}
.article-footer span {
  margin-left: 5px;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  margin: 28px 0 45px 0;
  font-size: 14px;
  color: #aaaaaa;
  font-family: "Clear Sans Thin";
}

@media screen and (max-width: 480px){
  #footer{
    padding: 10px;
  }
  .footer-top{
    flex-direction: column;
  }
  .phones{
    width: 100%;
  }
}
</style>
