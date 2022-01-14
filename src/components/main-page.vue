<template>
  <div class="main-page">
    <popup-info-main-page
      v-if="isPopupBtnClicked"
      @closeThisPopup="closeThisPopup"
    />

    <div class="main-page__header">
      <div class="main-page__header-img">
        <img src="..\assets\Group2.png" />
      </div>
      <div class="main-page__header-text">гросс маркет</div>
      <div class="main-page__header-phone">+7 (926) 433-14-16</div>
      <router-link :to="{ name: 'form-page' }">
        <button class="main-page__header-button">заполнить анкету</button>
        <img
          src="..\assets\Vector6.png"
          class="main-page__header-button-mobile-version"
        />
      </router-link>
    </div>

    <div class="main-page__screen-1">
      <main-carousel :mainCarousel_data="sliderItems" />
      <!-- <div class="main-page__screen-1-photo"></div> -->
    </div>

    <div class="main-page__vacancies">
      <vacancies-carousel :vacanciesCarousel_data="sliderVacanciesItems" />
    </div>

    <div class="main-page__instagram-title">
      <h2>мы в инстаграме</h2>
    </div>
    <div class="main-page__instagram">
      <div class="main-page__instagram-cards">
        <div class="main-page__instagram-cards-preview">
          <div class="main-page__instagram-cards-1"></div>
          <div class="main-page__instagram-cards-2">
            <div class="main-page__instagram-cards-2-item">One</div>
            <div class="main-page__instagram-cards-2-item">Two</div>
            <div class="main-page__instagram-cards-2-item">Three</div>
            <div class="main-page__instagram-cards-2-item">Four</div>
          </div>
        </div>

        <div class="main-page__instagram-cards-full" v-if="isInstBtnClicked">
          <div class="main-page__instagram-cards-3">
            <div class="main-page__instagram-cards-3-item">One</div>
            <div class="main-page__instagram-cards-3-item">Two</div>
            <div class="main-page__instagram-cards-3-item">Three</div>
            <div class="main-page__instagram-cards-3-item">Four</div>
            <div class="main-page__instagram-cards-3-item">Five</div>
            <div class="main-page__instagram-cards-3-item">Six</div>
            <div class="main-page__instagram-cards-3-item">Seven</div>
            <div class="main-page__instagram-cards-3-item">Eight</div>
          </div>
        </div>

        <div class="main-page__instagram-cards-full-mobile">
          <div class="main-page__instagram-cards-3">
            <div class="main-page__instagram-cards-3-item">One</div>
            <div class="main-page__instagram-cards-3-item">Two</div>
            <div class="main-page__instagram-cards-3-item">Three</div>
            <div class="main-page__instagram-cards-3-item">Four</div>
            <div class="main-page__instagram-cards-3-item">Five</div>
            <div class="main-page__instagram-cards-3-item">Six</div>
            <div class="main-page__instagram-cards-3-item">Seven</div>
            <div class="main-page__instagram-cards-3-item">Eight</div>
          </div>
        </div>
      </div>
      <div class="main-page__instagram-button">
        <button @click="instBtnClicked">показать ещё</button>
      </div>
    </div>

    <div class="main-page__geography-title">
      <h2>география</h2>
    </div>
    <div class="main-page__geography">
      <div class="main-page__geography-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77819.99133109793!2d31.021465599999996!3d52.445184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1642002285389!5m2!1sru!2sby"
          width="100%"
          height="540"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div class="main-page__geography-map-1128"></div>
    </div>

    <div class="main-page__footer">
      <div class="main-page__footer-first">
        <!-- <div class="main-page__footer-first-img">
          
        </div> -->

        <div class="main-page__footer-first-title">
          <div class="main-page__footer-first-title-img">
            <img src="..\assets\Group2.png" />
          </div>
          <div class="main-page__footer-first-title-h2">
            <h2>гросс маркет</h2>
          </div>
        </div>

        <div class="main-page__footer-first-share"><h2>поделиться</h2></div>
        <div class="main-page__footer-first-social">
          <a href="https://www.facebook.com/"
            ><img src="..\assets\Vector.png" alt=""
          /></a>

          <a href="https://vk.com/"
            ><img src="..\assets\Vector1.png" alt=""
          /></a>
        </div>
      </div>
      <div class="main-page__footer-second">
        <div class="main-page__footer-second-copyright">
          © Гросс маркет 2020
        </div>
        <div class="main-page__footer-second-policy" @click="popupClick">
          Политика обработки персональных данных
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popupInfoMainPage from "../popup/popup-info-main-page.vue";
import mainCarousel from "./main-carousel.vue";
import vacanciesCarousel from "./vacancies-carousel.vue";

export default {
  name: "mainPage",
  components: {
    popupInfoMainPage,
    mainCarousel,
    vacanciesCarousel,
  },
  data() {
    return {
      isInstBtnClicked: false,
      isPopupBtnClicked: false,
      sliderItems: [
        { id: 1, name: "man", img: "man.png" },
        { id: 2, name: "woman", img: "woman.png" },
      ],
      sliderVacanciesItems: [
        { id: 1, name: "tovaroved", img: "1.png" },
        { id: 2, name: "voditel", img: "2.png" },
        { id: 3, name: "pekar", img: "3.png" },
        { id: 4, name: "kassir", img: "4.png" },
        { id: 5, name: "prodavec", img: "5.png" },
        { id: 6, name: "povar", img: "6.png" },
        { id: 7, name: "priemschik", img: "7.png" },
      ],
    };
  },
  methods: {
    instBtnClicked() {
      this.isInstBtnClicked = !this.isInstBtnClicked;
    },
    popupClick() {
      this.isPopupBtnClicked = true;
    },
    closeThisPopup() {
      this.isPopupBtnClicked = false;
    },
  },
};
</script>


<style >
.main-page {
  /* height: 2887px;
  width: 1440px; */
  border-radius: 0px;
}

.main-page__header a {
  text-decoration: none;
}

.main-page__header {
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
}

.main-page__header-img img {
  padding-top: 7px;
}

.main-page__header-text {
  width: 208px;
  height: 41px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  margin-left: 16px;
  white-space: nowrap;
}

.main-page__header-phone {
  width: 618px;
  height: 23px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  padding-top: 9px;
  text-align: end;
}

.main-page__header-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 187px;
  height: 47px;
  background: #ffdf31;
  border-radius: 8px;
  border-color: #ffdf31;
  margin-left: 32px;
  cursor: pointer;
}

.main-page__header-button-mobile-version {
  display: none;
}

.main-page__screen-1 {
  height: 400px;
  /* width: 1440px; */
  margin-top: 30px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
}

.main-page__screen-1-discription-text {
  height: 198px;

  top: 159px;
}

.main-page__screen-1-discription-text h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 66px;
  color: #000000;
}

.main-page__screen-1-photo {
  width: 745px;
  height: 434px;
  background-image: url("https://i.ibb.co/qjB1jKX/Group-5.png");
  transform: matrix(1, 0, 0, 1, 0, 0);
  background-repeat: no-repeat;
}

.main-page__screen-1-discription-buttons {
  margin-top: 62px;
}

.main-page__instagram {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main-page__instagram-title {
  height: 41px;
  display: flex;
  justify-content: center;
}

.main-page__instagram-title h2 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  width: 1000px;
}

.main-page__instagram-button {
  /* width: 1110px; */
  height: 47px;
  /* background: #f5f5f5; */
  border-radius: 8px;
  margin-top: 30px;
  border-color: #f5f5f5;
  text-align: center;
}

.main-page__instagram-button {
  /* width: 1110px; */
  height: 47px;
  /* background: #f5f5f5; */
  border-radius: 8px;
  margin-top: 30px;
  border-color: #f5f5f5;
  text-align: center;
}

.main-page__instagram-button button {
  width: 60vw;
  height: 47px;

  background: #f5f5f5;
  border-radius: 8px;
}

.main-page__instagram-cards {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main-page__instagram-cards-1 {
  width: 570px;
  height: 570px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 32px;
  margin-right: 30px;
}

.main-page__instagram-cards-preview {
  display: flex;
  justify-content: center;
}

.main-page__instagram-cards-2 {
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
  margin-right: 30px;
  margin-top: 30px;
}

.main-page__instagram-cards-3 {
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 300px 300px;
  margin-right: 30px;
  margin-top: 30px;
}

.main-page__instagram-cards-3-item {
  background-color: #f5f5f5;
  margin-right: 30px;
  margin-bottom: 30px;
}

.main-page__instagram-cards-2-item {
  background-color: #f5f5f5;
  margin-right: 30px;
  margin-bottom: 30px;
}

.main-page__geography {
  display: flex;
  justify-content: center;
  margin-top: 68px;
}

.main-page__geography-title {
  /* width: 165px; */
  height: 41px;
  display: flex;
  justify-content: center;
}

.main-page__geography-title h2 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  width: 1000px;
}

.main-page__geography-map {
  width: 1110px;
  height: 540px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 32px;
}

.main-page__footer {
  display: flex;
  flex-direction: column;
  height: 235px;
  background: #f5f5f5;
  margin-top: 72px;
  padding-top: 73px;
}

.main-page__footer-first {
  display: flex;
  height: 89px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
}

.main-page__footer-second {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.main-page__footer-second-policy {
  width: 600px;
  text-align: end;
}

.main-page__footer-first-title {
  width: 208px;
  height: 41px;
  margin-left: 16px;
}

.main-page__footer-first-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  white-space: nowrap;
}

.main-page__footer-first-share {
  width: 181px;
  height: 41px;
  text-align: end;
  width: 327px;
}

.main-page__footer-first-share h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-page__footer-first-img {
  margin-left: 24px;
}

.main-page__footer-first-social {
  width: 200px;
  text-align: end;
}

.main-page__footer-first-social img {
  margin-top: 33px;
}

.main-page__footer-first-img img {
  margin-top: 33px;
}

.main-page__footer-first-title {
  display: flex;
}
.main-page__footer-first-title-img {
  margin-top: 35px;
  margin-right: 16px;
}
.main-page__screen-1-discription-text-mobile-version {
  display: none;
}

.main-page__footer-first-social img {
  margin-right: 8px;
}

.main-carousel__discription-text-mobile-version {
  display: none;
}

.main-page__vacancies {
  display: flex;
  justify-content: center;
}

.main-page__instagram-cards-full {
  display: flex;
  justify-content: center;
}

.main-page__instagram-cards-full-mobile {
  display: none;
}

@media screen and (max-width: 768px) and (min-width: 375px) {
  .main-page__instagram-cards-full-mobile {
    display: none;
  }

  .main-page__instagram-cards-full {
    display: none;
  }

  .main-page__vacancies-discription-title {
    width: 700px;
  }

  .main-page__vacancies-discription-buttons {
    display: none;
  }

  .main-page__screen-1-discription-text h1 {
    font-size: 10vw;
  }
  .main-page__footer-first-title h2 {
    font-size: 5vw;
  }

  .main-page__footer-first-share h2 {
    font-size: 5vw;
  }
  .main-page__header-text {
    font-size: 5vw;
  }

  .main-page__header-button {
    margin-left: 0px;
    cursor: pointer;
    width: 28vw;
  }

  .main-page__header-phone {
    font-size: 3vw;
  }

  .main-page__screen-1-discription-text-mobile-version {
    display: none;
  }

  .main-page__instagram-cards-3 {
    display: grid;
    grid-template-columns: 210px 210px 210px;
    grid-template-rows: 210px 210px 210px;
    margin-right: 30px;
    margin-top: 30px;
  }

  .main-page__instagram-cards-1 {
    display: none;
  }
}

@media screen and (max-width: 375px) {
  .main-page__instagram-cards-full-mobile {
    display: block;
  }

  .main-page__screen-1-discription-text {
    display: none;
  }

  .main-page__screen-1-discription-text-mobile-version {
    display: block;
    width: 346px;
    height: 88px;
  }

  .main-page__screen-1-discription-text-mobile-version h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 44px;
    color: #000000;
  }

  .main-page__screen-1-discription-buttons {
    display: none;
  }

  .main-page__vacancies-discription-buttons {
    display: none;
  }

  .main-page__header-button {
    display: none;
  }

  .main-page__header-button-mobile-version {
    display: block;
    margin-top: 10px;
  }

  .main-page__footer-first {
    flex-direction: column;
  }

  .main-page__screen-1-discription-text h1 {
    font-size: 10vw;
  }
  .main-page__footer-first-title h2 {
    font-size: 5vw;
  }

  .main-page__footer-first-share h2 {
    font-size: 5vw;
  }

  .main-page__header-phone {
    display: none;
  }

  .main-page__footer-second {
    flex-direction: column;
  }

  .main-page__footer-second-policy {
    width: auto;
    text-align: start;
  }
  .main-page__footer-first-share {
    display: none;
  }

  .main-page__footer-first-social {
    text-align: left;
  }
  .main-page__screen-1 {
    flex-direction: column;
  }

  .main-page__instagram-cards-1 {
    display: none;
  }

  .main-page__instagram-cards-preview {
    display: none;
  }

  .main-page__instagram-cards-3 {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 300px 300px 300px 300px 300px 300px 300px 300px;
  }
  .main-page__instagram-cards-3-item {
    margin-right: 0px;
  }
  .main-carousel {
    flex-direction: column;
  }
  .main-page__instagram-cards-full-mobile {
    margin-left: 10px;
  }
}
</style>