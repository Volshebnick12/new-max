<template>
  <div>
    <div class="d-flex column-row align-items-center justify-content-center">
      <svg
        width="35"
        height="40"
        viewBox="0 0 35 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="36.7695"
          width="30"
          height="4"
          transform="rotate(-45 0 36.7695)"
          fill="#F1AA1E"
        />
        <rect
          x="10.6066"
          y="36.0625"
          width="30"
          height="4"
          transform="rotate(-45 10.6066 36.0625)"
          fill="#22A09C"
        />
        <rect
          x="5.65686"
          y="21.2129"
          width="30"
          height="4"
          transform="rotate(-45 5.65686 21.2129)"
          fill="#DC112E"
        />
      </svg>
      <h2 class="title">Новости и акции</h2>
    </div>
    <div
      class="
        cards-stoks
        d-flex
        justify-content-between
        align-items-center
        flex-wrap
      "
    >
      <CardStock
        v-for="(card, index) in $store.state.stocks"
        :key="card.index"
        :product_data="card"
        :index="index"
      />
      <p class="text-stock">
        Смотреть все
        <router-link class="link-stock" to="/stock">скидки</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import CardStock from "./CardStock.vue";
export default {
  name: "StockMagazin",
  components: { CardStock },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 24px;
  color: #111111;
  padding: 82px 0 66px 16px;
}

.cards-stoks {
  max-width: 1140px;
  height: 100%;
  gap: 30px;
}

.text-stock {
  padding: 20px 0 34px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  margin: 0 auto;
}

.link-stock {
  color: #33348e;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    text-decoration: none;
  }

  &:active {
    opacity: 0.7;
    transition: 0.5s;
    text-decoration: none;
    color: #0e1085;
  }
}

@media (max-width: 360px) {
  .title {
    font-size: 20px;
    padding: 26px 0 22px 10px;
  }

  .cards-stoks {
    gap: 18px;
    padding: 0 16px;
  }
}
</style>
