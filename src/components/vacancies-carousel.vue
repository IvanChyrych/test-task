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
          @click="previousVacanciesImg"
        />
        <img
          class="vacancies-carousel__discription-buttons-right"
          src="..\assets\22.png"
          @click="nextVacanciesImg"
        />
      </div>
    </div>

    <div
      class="vacancies-carousel__cards"
      :style="{ 'margin-left': currentVacanciesImgIndex * 150 + '%' }"
      
    >
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
  methods: {
    previousVacanciesImg() {
      
      if (this.currentVacanciesImgIndex > -1) {
        this.currentVacanciesImgIndex--;
        console.log(this.currentVacanciesImgIndex);
      }
    },
    nextVacanciesImg() {
      
      if (this.currentVacanciesImgIndex <= 0) {
        this.currentVacanciesImgIndex++;
        console.log(this.currentVacanciesImgIndex);
      }
    },
  },
  data() {
    return { currentVacanciesImgIndex: -1 };
  },
};
</script>

<style>
.vacancies-carousel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 992px;
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
  transition: all ease 0.5s;
}
</style>