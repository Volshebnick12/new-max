<template>
  <div class="card-magazin d-flex justify-content-around align-items-center flex-column">
    <img :src="product_data.image" alt="magazin" />
    <a class="link" href="#">{{product_data.floor}}</a>
  </div>
</template>

<script>
export default {
  name: "CardCatalog",
  props: {
    product_data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

.card-magazin {
    width: 262px;
    height: 144px;
    border: 1px solid #E2E2E2;
}

img {
    object-fit: cover;
    max-width: 200px;
}

.link {
    font-family: 'Roboto';
    font-style: normal;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #A32C8E;

    &:hover {
        text-decoration: none;
        opacity: 0.7;
        transition: 0.5s;
    }
    &:active {
        color: #480d3d;
        transition: 0.5s;
    }
}
</style>