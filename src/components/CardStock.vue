<template>
  <div class="card-stock d-flex justify-content-center align-items-center">
    <img :src="product_data.image" alt="sale" />
    <p class="text">{{ product_data.sale }}%</p>
  </div>
</template>

<script>
export default {
  name: "CardStock",
  props: {
    product_data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-stock {
  width: 262px;
  height: 144px;
  border: 1px solid #e2e2e2;
  position: relative;

  &::before {
    content: "";
    background: url(../components/icons/stock.svg) no-repeat;
    width: 65px;
    height: 37px;
    position: absolute;
    bottom: -23px;
    left: 100px;
  }
}

.text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  position: absolute;
  bottom: -28px;
  left: 120px;
}

img {
  object-fit: cover;
  max-width: 200px;
}

@media (max-width: 360px) {
  .card-stock {
    width: 155px;
    height: 85px;
    position: relative;
  }
  img {
    object-fit: cover;
    max-height: 50px;
    max-width: 100px;
  }
  .card-stock::before {
    left: 45px;
  }
  .text {
    position: absolute;
    bottom: -28px;
    left: 66px;
  }
}
</style>