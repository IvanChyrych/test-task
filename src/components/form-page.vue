<template>
  <div class="form-page">
    <div class="form-page__header">
      <div class="form-page__header-img">
        <img src="..\assets\Group2.png" />
      </div>
      <div class="form-page__header-text"><h2>гросс маркет</h2></div>
      <div class="form-page__header-button">
        <router-link :to="{ name: 'main-page' }">
          <img src="..\assets\Vector2.png" />
        </router-link>
      </div>
    </div>
    <div class="form-page__title">
      <h1>Работа твоей мечты</h1>
    </div>

    <div class="form-page__data">
      <div class="form-page__data-personal">
        <p>Вакансия *</p>

        <select class="form-page__data-personal-select">
          <option value="value1" selected>товаровед</option>
          <option value="value2">водитель</option>
          <option value="value3">пекарь</option>
          <option value="value4">кассир</option>
          <option value="value5">продавец</option>
          <option value="value6">повар</option>
          <option value="value7">приёмщик</option>
        </select>

        <p class="form-page__data-personal-name-text">ФИО *</p>
        <input
          type="text"
          value="Константиновский Константин Александрович"
          class="form-page__data-personal-name-input"
        />

        <div class="form-page__data-personal-information">
          <div class="form-page__data-personal-information-birthday-phone">
            <p>Дата рождения *</p>
            <input
              type="text"
              value="28.07.2002"
              class="form-page__data-personal-information-birthday-phone-input"
            />

            <p>Контактый телефон *</p>
            <input
              type="text"
              value="+7 ("
              class="form-page__data-personal-information-birthday-phone-input"
            />
          </div>

          <div class="form-page__data-personal-information-gender-post">
            <p>Пол</p>

            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
            />
            <label for="contactChoice1">мужской</label>

            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            <label for="contactChoice2">женский</label>

            <p class="form-page__data-personal-information-gender-post-text">
              Электронная почта
            </p>
            <input
              type="text"
              value="+ewgfvsgvsg"
              class="form-page__data-personal-information-gender-post-input"
            />
          </div>
        </div>

        <p>Резюме</p>
        <input type="text" value="" class="form-page__data-personal-resume" />

        <div class="form-page__data-personal-attach">
          <img src="..\assets\Vector5.png" />

          <input type="text" value="выберете или перетащите файл" />
        </div>

        <p>Капча</p>

        <div class="form-page__data-personal-captcha">
          <div class="form-page__data-personal-captcha-input">
            <input type="checkbox" />я не робот
            <img src="..\assets\image11.png" />
          </div>

          <div class="form-page__data-personal-captcha-alert">
            <p>* поля для обязательного заполнения</p>
          </div>
        </div>

        <div class="form-page__data-personal-submit">
          <div class="form-page__data-personal-submit-text">
            <input
              type="checkbox"
              checked
              class="form-page__data-personal-submit-chekbox"
            />я подтверждаю согласие на обработку персональных данных и принимаю
            условия рассмотрения обращений *
          </div>
        </div>

        <button class="form-page__data-personal-sendbtn">отправить</button>
      </div>
      <div class="form-page__data-general">
        <h2>Наша суперцель</h2>

        <span class="form-page__data-general-text">
          — стать любимым магазином для каждой российской семьи.
          <p>
            Сотни тысяч наших сотрудников ежедневно работают над её достижением.
          </p>
          <p>
            Мы уверены, что в ближайшие годы достигнем этого и будет
            здорово,если вместе с тобой.
          </p></span
        >

        <div class="form-page__data-general-button">
          <h3>+7 (926) 433-14-16</h3>
        </div>
      </div>
    </div>

    <div class="form-page__footer">
      <div class="form-page__footer-first">
        <!-- <div class="form-page__footer-first-img">
          
        </div> -->

        <div class="form-page__footer-first-title">
          <div class="form-page__footer-first-title-img">
            <img src="..\assets\Group2.png" />
          </div>
          <div class="form-page__footer-first-title-h2">
            <h2>гросс маркет</h2>
          </div>
        </div>
        <div class="form-page__footer-first-share"><h2>поделиться</h2></div>
        <div class="form-page__footer-first-social">
          <img src="..\assets\Vector.png" alt="" /><img
            src="..\assets\Vector1.png"
            alt=""
          />
        </div>
      </div>
      <div class="form-page__footer-second">
        <div class="form-page__footer-second-copyright">
          © Гросс маркет 2020
        </div>
        <div class="form-page__footer-second-policy">
          Политика обработки персональных данных
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-page",
};
</script>

<style>
.form-page {
  height: 1448px;
  background: #ffffff;
}
.form-page__header {
  height: 105px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}
.form-page__header-img {
  /* margin-left: 165px; */
}

.form-page__header-img img {
  margin-top: 36px;
}

.form-page__header-text {
  margin-left: 16px;
  width: 208px;
  height: 41px;
  white-space: nowrap;
}

.form-page__header-text h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.form-page__header-button {
  width: 800px;
  text-align: end;
}

.form-page__header-button img {
  margin-top: 33px;
}

.form-page__title {
  height: 66px;
  margin-top: 65px;
  text-align: center;
  margin-right: 400px;
  white-space: nowrap;
}

.form-page__title h1 {
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 66px;
  color: #000000;
}

.form-page__footer {
  display: flex;
  flex-direction: column;
  height: 235px;
  background: #f5f5f5;
  margin-top: 72px;
  padding-top: 73px;
}

.form-page__footer-first {
  display: flex;
  height: 89px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
}

.form-page__footer-second {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.form-page__footer-second-policy {
  width: 600px;
  text-align: end;
}

.form-page__footer-first-title {
  /* width: 208px; */
  height: 41px;
  margin-left: 16px;
  white-space: nowrap;
  display: flex;
}

.form-page__footer-first-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.form-page__footer-first-share {
  width: 181px;
  height: 41px;
  text-align: end;
  width: 327px;
}

.form-page__footer-first-share h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.form-page__footer-first-img {
  margin-left: 24px;
}

.form-page__footer-first-social {
  width: 200px;
  text-align: end;
}

.form-page__footer-first-social img {
  margin-top: 33px;
}

.form-page__footer-first-img img {
  margin-top: 33px;
}

.form-page__footer-second-copyright {
  /* width: 600px; */
}

.form-page__data {
  display: flex;
  margin-top: 32px;
}

.form-page__data-general {
  display: flex;
  flex-direction: column;
  /* margin-right: 206px; */

  width: 412px;
  /* height: 41px; */
  margin-top: 20px;
}

.form-page__data-general h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #000000;
}

.form-page__data-general-text {
  /* width: 412px; */
  height: 207px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
}

.form-page__data-general-button {
  /* width: 445px; */
  height: 73px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-page__data-general-button h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

.form-page__data-personal {
  text-align: center;
}

.form-page__data-personal-select {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.form-page__data-personal-name-input {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.form-page__data-personal-name-text {
  margin-top: 28px;
}

.form-page__data-personal-information {
  display: flex;
  justify-content: center;
}

.form-page__data-personal-information-birthday-phone-input {
  width: 255px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left: 16px;
}

.form-page__data-personal-information-gender-post {
  /* margin-left: 30px; */
}

.form-page__data-personal-information-gender-post-input {
  width: 255px;
  height: 47px;
  background: #ff6666;
  opacity: 0.3;
  border-radius: 8px;
  padding-left: 16px;
}

.form-page__data-personal-information-gender-post-text {
  margin-top: 49px;
}

.form-page__data-personal-resume {
  width: 540px;
  height: 94px;
  background: #f5f5f5;
  border-radius: 8px;
}

.form-page__data-personal-attach {
  /* width: 540px; */
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 10px;
}

.form-page__data-personal-attach img {
  margin-left: 21px;
  margin-top: 8px;
}

.form-page__data-personal-attach input {
  margin-left: 17px;
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  opacity: 0.3;
}

.form-page__data-personal-sendbtn {
  width: 540px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
}

.form-page__data-personal-submit {
  display: flex;
  justify-content: center;
}

.form-page__data-personal-captcha {
  display: flex;
  justify-content: center;
}

.form-page__data-personal-captcha-input {
  display: flex;
  width: 255px;
  height: 47px;
  background: #f5f5f5;
  border-radius: 8px;
  align-items: center;
}

.form-page__data-personal-captcha-input img {
  margin-left: 92px;
}

.form-page__data-personal-captcha-input input {
  margin-left: 16px;
}

.form-page__data-personal-submit-chekbox {
  margin-top: 28px;
  width: 300px;
}

.form-page__data-personal-captcha-alert {
  margin-left: 30px;
}

.form-page__footer-first-title-img{
  padding-top: 33px;
}

@media screen and (max-width: 885px) and (min-width: 768px) {
  .form-page__data-general-button {
    margin-top: 11vh;
  }

  .form-page__data-general-button h3 {
    font-size: 2.3vh;
  }
}

@media screen and (max-width: 768px) and (min-width: 375px) {
  .form-page__data {
    display: flex;
    margin-top: 32px;
    flex-direction: column;
  }
  .form-page__data-general {
    width: auto;
  }

  .form-page__title h1 {
    font-size: 9vw;
  }

  .form-page__data-personal-name-input {
    width: 91vw;
  }

  .form-page__data-personal-select {
    width: 95vw;
  }

  .form-page__data-personal-information-birthday-phone-input {
    width: 51vw;
  }

  .form-page__data-personal-resume {
    width: 94vw;
  }

  .form-page__data-personal-information-gender-post-input {
    width: 33vw;
  }

  .form-page__data-personal-sendbtn {
    width: 90vw;
    height: 47px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .form-page__footer-first-share h2 {
    font-size: 5vw;
  }
  .form-page__footer-first-title h2{
    font-size: 5vw;
  }
}

@media screen and (max-width: 375px) {
  .form-page__data {
    display: flex;
    margin-top: 32px;
    flex-direction: column;
  }
  .form-page__data-general {
    width: auto;
  }

  .form-page__title h1 {
    font-size: 9vw;
  }

  .form-page__data-personal-name-input {
    width: 91vw;
  }

  .form-page__data-personal-select {
    width: 95vw;
  }

  .form-page__data-personal-information-birthday-phone-input {
    width: 85vw;
  }

  .form-page__data-personal-resume {
    width: 94vw;
  }

  .form-page__data-personal-information-gender-post-input {
    width: 86vw;
  }

  .form-page__data-personal-sendbtn {
    width: 90vw;
    height: 47px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .form-page__data-personal {
    text-align: start;
  }

  .form-page__data-personal-information {
    flex-direction: column;
  }

  .form-page__footer-first {
    flex-direction: column;
  }

  .form-page__footer-first-share {
    display: none;
  }

  .form-page__footer-first-title {
    display: flex;
  }

  .form-page__footer-first-social {
    text-align: start;
  }

  .form-page__footer-second {
    flex-direction: column;
  }

  .form-page__footer-second-policy {
    width: auto;
    text-align: start;
  }
}
</style>