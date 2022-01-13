<template>
  <div class="main-carousel">
    <div class="main-carousel__discription">
      <div class="main-carousel__discription-text-mobile-version">
        <h1>
          У тебя к этому <br />
          талант
        </h1>
      </div>

      <div class="main-carousel__discription-text-1" v-if="!currentImgIndex">
        <h1>
          У тебя <br />
          к этому <br />
          талант
        </h1>
      </div>

      <div class="main-carousel__discription-text-2" v-if="currentImgIndex">
        <h1>
          У тебя <br />
          всё под <br />
          контролем
        </h1>
      </div>

      <div class="main-carousel__discription-buttons">
        <img
          class="main-carousel__discription-buttons-left"
          src="..\assets\11.png"
          @click="previousImg"
        />
        <img
          class="main-carousel__discription-buttons-right"
          src="..\assets\22.png"
          @click="nextImg"
        />
      </div>
    </div>

    <div class="main-carousel-wrapper">
      <main-carousel-item
        v-for="item in mainCarousel_data"
        :key="item.id"
        :mainCarouselItem_data="item"
        :style="{ 'margin-left': '-' + currentImgIndex * 50 + '%' }"
      />
    </div>
  </div>
</template>

<script>
import mainCarouselItem from "./main-carousel-item.vue";

export default {
  name: "main-carousel",
  props: {
    mainCarousel_data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    mainCarouselItem,
  },
  methods: {
    previousImg() {
      if (this.currentImgIndex > 0) {
        this.currentImgIndex--;
        console.log(this.currentImgIndex);
      }
    },
    nextImg() {
      if (this.currentImgIndex <= 0) {
        this.currentImgIndex++;
        console.log(this.currentImgIndex);
      }
    },
  },
  data() {
    return { currentImgIndex: 0 };
  },
};
</script>

<style >


.main-carousel-wrapper {
  max-width: 612px;
  overflow: hidden;
  display: flex;
}

.main-carousel {
  display: flex;
  /* max-width: 600px; */
  overflow: hidden;
}

.main-page__screen-1-discription {
  display: flex;
  flex-direction: column;
}

.main-carousel__discription-buttons-right {
  cursor: pointer;
}

.main-carousel__discription-buttons-left {
  cursor: pointer;
  margin-right: 10px;
}
</style>