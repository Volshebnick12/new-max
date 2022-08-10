<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <HeaderAll />
    <div>
      
    </div>
    <router-view />
    <FooterAll />
  </div>
</template>

<script>
import HeaderAll from './components/HeaderAll.vue';
import FooterAll from './components/FooterAll.vue';

export default {
  name: 'App',
  components: {
    HeaderAll,
    FooterAll
}
}
</script>

<style lang="scss" scoped>

</style>
