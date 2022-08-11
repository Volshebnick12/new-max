<template>
  <div
    class="
      cards-catalog
      d-flex
      justify-content-between
      align-items-center
      flex-wrap
    "
  >
    <CardCatalog
      v-for="(card, index) in $store.state.cards"
      :key="card.index"
      :product_data="card"
      :index="index"
    />
    <p class="text-magazin">
      Смотреть еще
      <router-link class="link-magazin" to="/catalog">37 магазинов</router-link>
    </p>
  </div>
</template>

<script>
import CardCatalog from "./CardCatalog.vue";
export default {
  name: "CatalogMagazin",
  data() {
    return {
      cards: [],
    };
  },
  components: { CardCatalog },
};
</script>

<style lang="scss" scoped>
.cards-catalog {
  max-width: 1140px;
  height: 100%;
  gap: 30px;
  padding-top: 104px;
}

.text-magazin {
  padding: 20px 0 54px;
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

.link-magazin {
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
  .cards-catalog {
    height: 100%;
    gap: 18px;
    padding: 35px 16px 28px;
  }

  .text-magazin {
    font-size: 14px;
    padding: 3px 0 28px;
  }
}
</style>
