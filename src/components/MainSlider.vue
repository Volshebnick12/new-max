<template>
  <div
    class="
      main-slider
      d-flex
      justify-content-center
      align-items-center
      flex-column
      container-fluid
    "
  >
    <div class="container-fluid container-slider">
      <img src="/image/main-background.png" alt="Никольский Молл" />
    </div>
    <div
      class="sliders-groop d-flex justify-content-between align-items-center"
    >
      <div class="slide1"></div>
      <div class="slide2 active"></div>
      <div class="slide3"></div>
      <div class="slide4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlider",
};
</script>

<style lang="scss" scoped>
*,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.main-slider {
  position: relative;
  padding: 0;
}

img {
  width: 100vw;
}

.container-slider {
  padding: 0;
}

.sliders-groop {
  width: 105px;
  height: 21px;
  position: absolute;
  bottom: 45px;
}

.slide1 {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #a32c8e;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    background-color: #f454d9;
    transition: 0.5s;
  }
}
.slide2 {
  @extend .slide1;
}
.slide3 {
  @extend .slide1;
}
.slide4 {
  @extend .slide1;
}

.active {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #a32c8e;
  position: relative;

  &:after {
    content: "";
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 2px solid #f1aa1e;
    background: none;
    outline: none;
    position: absolute;
    top: -8px;
    left: -8px;
  }
}

@media (max-width: 360px) { 
  .sliders-groop {
    width: 59px;
    height: 12px;
    position: absolute;
    bottom: 5px;
  }

  .slide1 {
    width: 5px;
    height: 5px;
  }
  .slide2 {
    @extend .slide1;
  }
  .slide3 {
    @extend .slide1;
  }
  .slide4 {
    @extend .slide1;
  }

  .active {
  width: 2px;
  height: 2px;
  position: relative;

  &:after {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: -5px;
    left: -5px;
  }
}
}
</style>
