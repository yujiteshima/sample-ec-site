<template lang="pug">
b-container(fluid).thanks-container
  b-row.thanks-text
    b-col(cols="12").display-1.d-flex.align-items-center.justify-content-center Thanks!!!!!!!!
    b-col(cols="12").text-center
      nuxt-link(to="/")
        b-button(size="lg" variant="warning") Top画面に戻る
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.thanks-container {
  height: 93vh;
  background-image: url("../../static/images/thanks-unsplash.jpg");
  background-size: cover;
  .thanks-text {
    height: 93vh;
    color: antiquewhite;
  }
}
</style>

