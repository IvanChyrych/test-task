<template>
  <div class="vacancies-carousel-item">
    <img :src="require('../assets/' + vacanciesCarouselItem_data.img)" alt="" />
  </div>
</template>

<script>
export default {
  name: "vacancies-carousel-item",
  props: {
    vacanciesCarouselItem_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>