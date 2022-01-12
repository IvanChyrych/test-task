<template>
  <div class="thanks-page">
    <div class="thanks-page__header">
      <div class="thanks-page__header-img">
        <img src="..\assets\Group2.png" />
      </div>
      <div class="thanks-page__header-text"><h2>гросс маркет</h2></div>
      <div class="thanks-page__header-button">
        <router-link :to="{ name: 'main-page' }">
          <img src="..\assets\Vector2.png" />
        </router-link>
      </div>
    </div>

    <div class="thanks-page__content">
      <div class="thanks-page__content-discription">
        <h1>Ждем тебя!</h1>
        <p>
          В 2020 году самыми востребованными умениями и качествами на рынке
          труда станут:
        </p>
        <p>
          Умение ставить цели, планировать свое время, инициативность,
          настойчивость, высокая мотивация, умение эффективно общаться,
          любознательность.
        </p>
        <p>А профессиональным навыкам можно научить любого человека.</p>
      </div>

      <div class="thanks-page__content-contacts">
        <h2>Остались вопросы?</h2>
        <h3>+7 (926) 433-14-16</h3>
      </div>
    </div>

    <div class="thanks-page__footer">
      <div class="thanks-page__footer-first">
        <!-- <div class="thanks-page__footer-first-img">
          
        </div> -->

        <div class="thanks-page__footer-first-title">
          <div class="thanks-page__footer-first-title-img">
            <img src="..\assets\Group2.png" />
          </div>
          <div class="thanks-page__footer-first-title-h2">
            <h2>гросс маркет</h2>
          </div>
        </div>
        <div class="thanks-page__footer-first-share"><h2>поделиться</h2></div>
        <div class="thanks-page__footer-first-social">
          <a href="https://www.facebook.com/"
            ><img src="..\assets\Vector.png" alt=""
          /></a>

          <a href="https://vk.com/"
            ><img src="..\assets\Vector1.png" alt=""
          /></a>
        </div>
      </div>
      <div class="thanks-page__footer-second">
        <div class="thanks-page__footer-second-copyright">
          © Гросс маркет 2020
        </div>
        <div class="thanks-page__footer-second-policy" @click="popupClick">
          Политика обработки персональных данных
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "thanks-page",
};
</script>

<style>
.thanks-page {
  /* height: 1448px; */
  background: #ffffff;
}
.thanks-page__header {
  height: 105px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}
.thanks-page__header-img {
  /* margin-left: 165px; */
}

.thanks-page__header-img img {
  margin-top: 36px;
}

.thanks-page__header-text {
  margin-left: 16px;
  width: 208px;
  height: 41px;
  white-space: nowrap;
}

.thanks-page__header-text h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.thanks-page__header-button {
  width: 800px;
  text-align: end;
}

.thanks-page__header-button img {
  margin-top: 33px;
}

.thanks-page__title {
  height: 66px;
  margin-top: 65px;
  text-align: center;
  margin-right: 400px;
  white-space: nowrap;
}

.thanks-page__title h1 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 66px;
  color: #000000;
}

.thanks-page__footer {
  display: flex;
  flex-direction: column;
  height: 235px;
  background: #f5f5f5;
  margin-top: 72px;
  padding-top: 73px;
}

.thanks-page__footer-first {
  display: flex;
  height: 89px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
}

.thanks-page__footer-second {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.thanks-page__footer-second-policy {
  width: 600px;
  text-align: end;
}

.thanks-page__footer-first-title {
  /* width: 208px; */
  height: 41px;
  margin-left: 16px;
  white-space: nowrap;
  display: flex;
}

.thanks-page__footer-first-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.thanks-page__footer-first-share {
  width: 181px;
  height: 41px;
  text-align: end;
  width: 327px;
}

.thanks-page__footer-first-share h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.thanks-page__footer-first-img {
  margin-left: 24px;
}

.thanks-page__footer-first-social {
  width: 200px;
  text-align: end;
}

.thanks-page__footer-first-social img {
  margin-top: 33px;
}

.thanks-page__footer-first-img img {
  margin-top: 33px;
}

.thanks-page__footer-second-copyright {
  /* width: 600px; */
}

.thanks-page__data {
  display: flex;
  margin-top: 32px;
}

.thanks-page__data-general {
  display: flex;
  flex-direction: column;
  /* margin-right: 206px; */

  width: 412px;
  /* height: 41px; */
  margin-top: 20px;
}

.thanks-page__data-general h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.thanks-page__data-general-text {
  /* width: 412px; */
  height: 207px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
}

.thanks-page__data-general-button {
  /* width: 445px; */
  height: 73px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thanks-page__data-general-button h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

.thanks-page__data-personal {
  text-align: center;
}

.thanks-page__data-personal-select {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.thanks-page__data-personal-name-input {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.thanks-page__data-personal-name-text {
  margin-top: 28px;
}

.thanks-page__data-personal-information {
  display: flex;
  justify-content: center;
}

.thanks-page__data-personal-information-birthday-phone-input {
  width: 255px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.thanks-page__data-personal-information-gender-post {
  /* margin-left: 30px; */
}

.thanks-page__data-personal-information-gender-post-input {
  width: 255px;
  height: 47px;
  background: #ff6666;
  opacity: 0.3;
  border-radius: 8px;
  padding-left: 16px;
}

.thanks-page__data-personal-information-gender-post-text {
  margin-top: 49px;
}

.thanks-page__data-personal-resume {
  width: 540px;
  height: 94px;
  background: #f5f5f5;
  border-radius: 8px;
}

.thanks-page__data-personal-attach {
  /* width: 540px; */
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 10px;
}

.thanks-page__data-personal-attach img {
  margin-left: 21px;
  margin-top: 8px;
}

.thanks-page__data-personal-attach input {
  margin-left: 17px;
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  opacity: 0.3;
}

.thanks-page__data-personal-sendbtn {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
}

.thanks-page__data-personal-submit {
  display: flex;
  justify-content: center;
}

.thanks-page__data-personal-captcha {
  display: flex;
  justify-content: center;
}

.thanks-page__data-personal-captcha-input {
  display: flex;
  width: 255px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  align-items: center;
}

.thanks-page__data-personal-captcha-input img {
  margin-left: 92px;
}

.thanks-page__data-personal-captcha-input input {
  margin-left: 16px;
}

.thanks-page__data-personal-submit-chekbox {
  margin-top: 28px;
  width: 300px;
}

.thanks-page__data-personal-captcha-alert {
  margin-left: 30px;
}

.thanks-page__footer-first-title-img {
  padding-top: 33px;
  margin-right: 16px;
}

.thanks-page__footer-first-social img {
  margin-right: 8px;
}

.thanks-page__content{
    display: flex;
    justify-content: center;
    padding: 100px;
}

@media screen and (max-width: 885px) and (min-width: 768px) {
  .thanks-page__data-general-button {
    margin-top: 11vh;
  }

  .thanks-page__data-general-button h3 {
    font-size: 2.3vh;
  }
}

@media screen and (max-width: 768px) and (min-width: 375px) {
  .thanks-page__data {
    display: flex;
    margin-top: 32px;
    flex-direction: column;
  }
  .thanks-page__data-general {
    width: auto;
  }

  .thanks-page__title h1 {
    font-size: 9vw;
  }

  .thanks-page__data-personal-name-input {
    width: 91vw;
  }

  .thanks-page__data-personal-select {
    width: 95vw;
  }

  .thanks-page__data-personal-information-birthday-phone-input {
    width: 51vw;
  }

  .thanks-page__data-personal-resume {
    width: 94vw;
  }

  .thanks-page__data-personal-information-gender-post-input {
    width: 33vw;
  }

  .thanks-page__data-personal-sendbtn {
    width: 90vw;
    height: 47px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .thanks-page__footer-first-share h2 {
    font-size: 5vw;
  }
  .thanks-page__footer-first-title h2 {
    font-size: 5vw;
  }
}

@media screen and (max-width: 375px) {
  .thanks-page__data {
    display: flex;
    margin-top: 32px;
    flex-direction: column;
  }
  .thanks-page__data-general {
    width: auto;
  }

  .thanks-page__title h1 {
    font-size: 9vw;
  }

  .thanks-page__data-personal-name-input {
    width: 91vw;
  }

  .thanks-page__data-personal-select {
    width: 95vw;
  }

  .thanks-page__data-personal-information-birthday-phone-input {
    width: 85vw;
  }

  .thanks-page__data-personal-resume {
    width: 94vw;
  }

  .thanks-page__data-personal-information-gender-post-input {
    width: 86vw;
  }

  .thanks-page__data-personal-sendbtn {
    width: 90vw;
    height: 47px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .thanks-page__data-personal {
    text-align: start;
  }

  .thanks-page__data-personal-information {
    flex-direction: column;
  }

  .thanks-page__footer-first {
    flex-direction: column;
  }

  .thanks-page__footer-first-share {
    display: none;
  }

  .thanks-page__footer-first-title {
    display: flex;
  }

  .thanks-page__footer-first-social {
    text-align: start;
  }

  .thanks-page__footer-second {
    flex-direction: column;
  }

  .thanks-page__footer-second-policy {
    width: auto;
    text-align: start;
  }
}
</style>