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

<style leng="scss" scoped>
.cards-catalog {
  max-width: 1140px;
  height: 100%;
  gap: 30px;
  padding-top: 104px;
}

.text-magazin {
  padding-top: 20px;
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
}

.link-magazin:hover {
  opacity: 0.7;
  transition: 0.5s;
  text-decoration: none;
}

.link-magazin:active {
  opacity: 0.7;
  transition: 0.5s;
  text-decoration: none;
  color: #0e1085;
}
</style>
