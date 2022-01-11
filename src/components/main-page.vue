<template>
  <div class="main-page">
    <popup-info 
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
      <div class="main-page__screen-1-discription">
        <div class="main-page__screen-1-discription-text">
          <h1>
            У тебя <br />
            к этому <br />
            талант
          </h1>
        </div>
        <div class="main-page__screen-1-discription-text-mobile-version">
          <h1>
            У тебя к этому <br />
            талант
          </h1>
        </div>
        <div class="main-page__screen-1-discription-buttons">
          <img src="..\assets\Group32.png" alt="" />
        </div>
      </div>

      <div class="main-page__screen-1-photo"></div>
    </div>
    <div class="main-page__vacancies">
      <div class="main-page__vacancies-discription-title">
        <h2>вакансии в гросс маркете</h2>
      </div>
      <div class="main-page__vacancies-discription-buttons">
        <img src="..\assets\Group32.png" alt="" />
      </div>
    </div>
    <div class="main-page__vacancies-cards">
      <div class="main-page__vacancies-cards-1"></div>
      <div class="main-page__vacancies-cards-2"></div>
      <div class="main-page__vacancies-cards-3"></div>
    </div>

    <div class="main-page__instagram-title">
      <h2>мы в инстаграме</h2>
    </div>
    <div class="main-page__instagram">
      <div class="main-page__instagram-cards">
        <div class="main-page__instagram-cards-1"></div>
      </div>
      <button class="main-page__instagram-button">показать ещё</button>
    </div>

    <div class="main-page__geography-title">
      <h2>география</h2>
    </div>
    <div class="main-page__geography">
      <div class="main-page__geography-map"></div>
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
          <img src="..\assets\Vector.png" alt="" /><img
            src="..\assets\Vector1.png"
            alt=""
          />
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
import popupInfo from "../popup/popup-info.vue";

export default {
  name: "mainPage",
  components: {
    popupInfo,
  },
  data() {
    return {
      isPopupBtnClicked: false,
    };
  },
  methods: {
    popupClick() {
      this.isPopupBtnClicked = true;
    },
    closeThisPopup(){
      this.isPopupBtnClicked = false;
    }
  },
};
</script>


<style scoped>
.main-page {
  /* height: 2887px;
  width: 1440px; */
  border-radius: 0px;
}

.main-page__header {
  display: flex;
  justify-content: center;
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

.main-page__screen-1-discription {
  /* margin-left: 165px; */
}

.main-page__screen-1-discription-text {
  /* width: 490px; */
  height: 198px;
  /* left: 165px; */
  top: 159px;

  /* H1 */
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

.main-page__vacancies {
  display: flex;
  justify-content: center;
}

.main-page__vacancies-discription {
  display: flex;
  /* margin-left: 165px; */
  margin-top: 43px;
}

.main-page__vacancies-discription-title {
  width: 409px;
  height: 41px;
}

.main-page__vacancies-discription-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  white-space: nowrap;
}

.main-page__vacancies-discription-buttons {
  width: 600px;
  margin-top: 27px;
  text-align: end;
}

.main-page__vacancies-cards {
  display: flex;
  justify-content: center;
}

.main-page__vacancies-cards-1 {
  width: 350px;
  height: 482px;
  background: #f5f5f5;
  border-radius: 8px;
  /* margin-left: 165px; */
  margin-top: 26px;
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
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 30px;
  border-color: #f5f5f5;
}

.main-page__instagram-cards {
  display: flex;
  justify-content: center;
}

.main-page__instagram-cards-1 {
  width: 540px;
  height: 540px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 32px;
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

.main-page__footer-second-copyright {
  /* width: 600px; */
}

.main-page__footer-first-title {
  display: flex;
}
.main-page__footer-first-title-img {
  margin-top: 35px;
}
.main-page__screen-1-discription-text-mobile-version {
  display: none;
}

@media screen and (max-width: 768px) and (min-width: 375px) {
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
  }

  .main-page__header-button {
    width: 28vw;
  }

  .main-page__header-phone {
    font-size: 3vw;
  }
  .main-page__header-button-mobile-version {
    /* width: 610px; */
  }
  .main-page__screen-1-discription-text-mobile-version {
    display: none;
  }
}

@media screen and (max-width: 375px) {
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

  /* .main-page__screen-1-photo {
    position: absolute;
    width: 730px;
    height: 426px;
    left: 507px;
    top: 259px;

    background: url("https://i.ibb.co/qjB1jKX/Group-5.png");
    transform: matrix(-1, 0, 0, 1, 0, 0);
  } */
}
</style>