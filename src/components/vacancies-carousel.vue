<template>
  <div class="vacancies-carousel">
    <div class="vacancies-carousel__discription">
      <div class="vacancies-carousel__discription-title">
        <h2>вакансии в гросс маркете</h2>
      </div>
      <div class="vacancies-carousel__discription-buttons">
        <!-- <img src="..\assets\Group32.png" alt="" /> -->
        <img
          class="vacancies-carousel__discription-buttons-left"
          src="..\assets\11.png"
          alt=""
        />
        <img
          class="vacancies-carousel__discription-buttons-right"
          src="..\assets\22.png"
          alt=""
        />
      </div>
    </div>

    <div class="vacancies-carousel__cards">
      <div class="vacancies-carousel__cards-1"></div>
      <vacancies-carousel-item
        v-for="item in vacanciesCarousel_data"
        :key="item.id"
        :vacanciesCarouselItem_data="item"
      />
    </div>
  </div>
</template>

<script>
import vacanciesCarouselItem from "./vacancies-carousel-item.vue";

export default {
  name: "vacancies-carousel",
  components: {
    vacanciesCarouselItem,
  },
  props: {
    vacanciesCarousel_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.vacancies-carousel {
  display: flex;
  flex-direction: column;
}

.vacancies-carousel__discription {
  display: flex;
  justify-content: center;
}

.vacancies-carousel__discription-buttons-left {
  cursor: pointer;
  margin-right: 10px;
}
.vacancies-carousel__discription-buttons-right {
  cursor: pointer;
}

.vacancies-carousel__discription-buttons-left {
  cursor: pointer;
  margin-right: 10px;
}

.vacancies-carousel__discription-buttons-right {
  cursor: pointer;
}

.vacancies-carousel__cards {
  display: flex;
  justify-content: center;
}

.vacancies-carousel__cards-1 {
  width: 350px;
  height: 482px;
  background: #f5f5f5;
  border-radius: 8px;
  /* margin-left: 165px; */
  margin-top: 26px;
}
</style>