<template lang="pug">
  div.default-container
    TheNavbar
    nuxt
    Footer
    
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Footer from "../components/Footer.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TopNavBar from "../components/TopNavBar.vue";
//import SignUpModal from "../components/SignUpModal";
export default {
  components: {
    //SignUpModal,
    TheHeader,
    Footer,
    TheNavbar,
    TopNavBar
  }
};
</script>

<style lang="scss" scoped>
.default-container {
  background-image: url("../static/images/washi-pakutaso.jpg");
  background-size: cover;
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
