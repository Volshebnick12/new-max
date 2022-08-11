<template>
  <div class="content">
    <img src="/image/404.png" alt="404" width="300" />
    <p class="text">
      Упс, мы не можем найти данную страницу. Попробуйте ещё раз!
      <router-link class="link" to="/">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

img {
  margin: 0 auto;
}

.text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 15px;
  margin-bottom: 60px;
}

.link {
  @extend .text;
  color: #8557a4;

  &:hover {
    opacity: 0.7;
    transition: all 0.3s;
    text-decoration: none;
  }
}

@media (max-width: 360px) {
  .text {
    font-size: 16px;
    margin: 0 0 15px 10px;
  }
}
</style>
