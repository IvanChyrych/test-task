<template>
  <div class="main-wrapper">
    <div class="main-wrapper__header">
      <div class="main-wrapper__header-img">
        <img src="..\assets\Group2.png" />
      </div>
      <div class="main-wrapper__header-text">гросс маркет</div>
      <div class="main-wrapper__header-phone">+7 (926) 433-14-16</div>
      <button class="main-wrapper__header-button">заполнить анкету</button>
    </div>
    <div class="main-wrapper__screen-1">
      <div class="main-wrapper__screen-1-discription">
        <div class="main-wrapper__screen-1-discription-text">
          <h1>
            У тебя <br />
            к этому <br />
            талант
          </h1>
        </div>
        <div class="main-wrapper__screen-1-discription-buttons">
          <img src="..\assets\Group32.png" alt="" />
        </div>
      </div>

      <div class="main-wrapper__screen-1-photo"></div>
    </div>
    <div class="main-wrapper__vacancies">
      <div class="main-wrapper__vacancies-discription">
        <div class="main-wrapper__vacancies-discription-title">
          <h2>вакансии в гросс маркете</h2>
        </div>
        <div class="main-wrapper__vacancies-discription-buttons">
          <img src="..\assets\Group32.png" alt="" />
        </div>
      </div>
      <div class="main-wrapper__vacancies-cards">
        <div class="main-wrapper__vacancies-cards-1"></div>
        <div class="main-wrapper__vacancies-cards-2"></div>
        <div class="main-wrapper__vacancies-cards-3"></div>
      </div>
    </div>
    <div class="main-wrapper__instagram">
      <div class="main-wrapper__instagram-title">
        <h2>мы в инстаграме</h2>
      </div>
      <div class="main-wrapper__instagram-cards">
        <div class="main-wrapper__instagram-cards-1"></div>
      </div>
      <button class="main-wrapper__instagram-button">показать ещё</button>
    </div>
    <div class="main-wrapper__geography">
      <div class="main-wrapper__geography-title">
        <h2>география</h2>
      </div>
      <div class="main-wrapper__geography-map"></div>
    </div>
    <div class="main-wrapper__footer">
      <div class="main-wrapper__footer-first">
        <div class="main-wrapper__footer-first-img">
          <img src="..\assets\Group2.png" />
        </div>
        <div class="main-wrapper__footer-first-title">
          <h2>гросс маркет</h2>
        </div>
        <div class="main-wrapper__footer-first-share"><h2>поделиться</h2></div>
        <div class="main-wrapper__footer-first-social">
          <img src="..\assets\Vector.png" alt="" /><img
            src="..\assets\Vector1.png"
            alt=""
          />
        </div>
      </div>
      <div class="main-wrapper__footer-second">
        <div class="main-wrapper__footer-second-copyright">
          © Гросс маркет 2020
        </div>
        <div class="main-wrapper__footer-second-policy">
          Политика обработки персональных данных
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainWrapper",
};
</script>


<style scoped>
.main-wrapper {
  height: 2887px;
  width: 1440px;
  border-radius: 0px;
}

.main-wrapper__header {
  display: flex;
  margin-left: 165px;
  margin-right: 165px;
  margin-top: 35px;
}

.main-wrapper__header-img img {
  padding-top: 7px;
}

.main-wrapper__header-text {
  width: 208px;
  height: 41px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
  margin-left: 16px;
}

.main-wrapper__header-phone {
  width: 147px;
  height: 23px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  margin-left: 499px;
  padding-top: 9px;
}

.main-wrapper__header-button {
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

.main-wrapper__screen-1 {
  height: 400px;
  width: 1440px;
  margin-top: 30px;
  background-color: #f5f5f5;
  display: flex;
}

.main-wrapper__screen-1-discription {
  margin-left: 165px;
}

.main-wrapper__screen-1-discription-text {
  width: 490px;
  height: 198px;
  left: 165px;
  top: 159px;

  /* H1 */
}

.main-wrapper__screen-1-discription-text h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 66px;
  color: #000000;
}

.main-wrapper__screen-1-photo {
  width: 745px;
  height: 434px;
  background-image: url("https://i.ibb.co/qjB1jKX/Group-5.png");
  transform: matrix(1, 0, 0, 1, 0, 0);
  background-repeat: no-repeat;
}

.main-wrapper__screen-1-discription-buttons {
  margin-top: 62px;
}

.main-wrapper__vacancies-discription {
  display: flex;
  margin-left: 165px;
  margin-top: 43px;
}

.main-wrapper__vacancies-discription-title {
  width: 409px;
  height: 41px;
}

.main-wrapper__vacancies-discription-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-wrapper__vacancies-discription-buttons {
  margin-left: 635px;
  margin-top: 27px;
}

.main-wrapper__vacancies-cards-1 {
  width: 350px;
  height: 482px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-left: 165px;
  margin-top: 26px;
}

.main-wrapper__instagram {
  margin-left: 165px;
  margin-top: 70px;
}

.main-wrapper__instagram-title {
  width: 264px;
  height: 41px;
}

.main-wrapper__instagram-title h2 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-wrapper__instagram-button {
  width: 1110px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 30px;
  border-color: #f5f5f5;
}

.main-wrapper__instagram-cards-1 {
  width: 540px;
  height: 540px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 32px;
}

.main-wrapper__geography {
  margin-left: 165px;
  margin-top: 68px;
}

.main-wrapper__geography-title {
  width: 165px;
  height: 41px;
}

.main-wrapper__geography-title h2 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-wrapper__geography-map {
  width: 1110px;
  height: 540px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 32px;
}

.main-wrapper__footer {
  width: 1440px;
  height: 235px;
  background: #f5f5f5;
  margin-top: 72px;
  padding-top: 73px;
}

.main-wrapper__footer-first {
  width: 1110px;
  height: 89px;
  background: #ffffff;
  border-radius: 8px;
  margin-left: 165px;
}

.main-wrapper__footer-second {
  margin-left: 165px;
}

.main-wrapper__footer-second {
  display: flex;
  margin-top: 25px;
}

.main-wrapper__footer-second-policy {
  margin-left: 428px;
}

.main-wrapper__footer-first {
  display: flex;
}

.main-wrapper__footer-first-title {
  width: 208px;
  height: 41px;
  margin-left: 16px;
}

.main-wrapper__footer-first-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-wrapper__footer-first-share {
  width: 181px;
  height: 41px;
  margin-left: 301px;
}

.main-wrapper__footer-first-share h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.main-wrapper__footer-first-img {
  margin-left: 24px;
}

.main-wrapper__footer-first-social {
  margin-left: 279px;
}

.main-wrapper__footer-first-social img {
  margin-top: 33px;
}

.main-wrapper__footer-first-img img {
  margin-top: 33px;
}
</style>
