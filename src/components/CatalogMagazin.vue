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
      v-for="(card, index) in $store.state.magazin"
      :key="card.index"
      :product_data="card"
      :index="index"
    />
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

</style>
