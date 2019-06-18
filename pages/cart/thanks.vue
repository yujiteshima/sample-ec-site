<template lang="pug">
b-container(fluid).thanks-container
  b-row.thanks-text
    b-col(cols="12").d-flex.align-items-center.justify-content-center 有難う御座いました。
    b-col(cols="12").text-center
      nuxt-link(to="/")
        b-button(size="lg" variant="warning") Top画面に戻る
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.thanks-container {
  min-height: 93vh;

  background-image: url("~assets/images/thanks-unsplash.jpg");
  background-size: cover;
  .thanks-text {
    font-family: "Myfont";
    height: 93vh;
    color: antiquewhite;
    font-size: 6vw;
  }
}
</style>

