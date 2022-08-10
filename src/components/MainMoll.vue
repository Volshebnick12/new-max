<template>
  <div class="d-flex justify-content-center align-items-center flex-column container-fluid">
    <MainSlider />
    <MainCatalogMagazin />
    <NewsStock />
    <StokMagazin />
  </div>
</template>

<script>
import MainSlider from "./MainSlider.vue";
import NewsStock from "./NewsStock.vue";
import StokMagazin from "./StokMagazin.vue";
import MainCatalogMagazin from "./MainCatalogMagazin.vue";
export default {
  name: "MainMoll",
  components: { MainSlider, NewsStock, StokMagazin, MainCatalogMagazin },
};
</script>

<style></style>
