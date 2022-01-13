<template>
  <div class="main-carousel-item">
    <img :src="require('../assets/' + mainCarouselItem_data.img)" alt="" />
  </div>
</template>

<script>
export default {
  name: "main-carousel-item",
  props: {
    mainCarouselItem_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.main-carousel-item{
  transition: all ease .5s;
}
</style>