<template lang="pug">
  div.default-container
    TheHeader
    nuxt.
    Footer
</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import Footer from "../components/Footer.vue"
export default {
  components:{
    TheHeader,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .default-container{
    background-image: url("../static/images/washi-pakutaso.jpg");
    background-size:cover;
  }
  // .body{
  //   padding-top:50px;
  // }
  // .bottom-nav{
  //   position: -webkit-sticky;
  //   position: sticky;
  //   top: 0;
  // }
</style>
