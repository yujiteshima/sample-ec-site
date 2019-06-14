<template lang="pug">
  div.site-header-wrapper.site-header
    b-navbar(toggleable="lg" type="dark" fixed="top")
      b-navbar-brand 出前寿司
      b-navbar-toggle(target="nav-collapse")
      b-collapse(is-nav)#nav-collapse
        
        b-nav-form
            b-form-select(v-model="selected" :options="options" size="sm").select-form
            b-form-input(size="sm" placeholder="Search")
            b-button(size='sm' placeholder="Search") Search
        b-navbar-nav.ml-auto
          b-navbar-nav
            b-nav-item
              nuxt-link(to="/") Top
            b-nav-item(v-if="!isLogin")
              nuxt-link(to="/auth") Login/新規登録
            b-nav-item(v-if="isLogin")
              nuxt-link(to="/auth") Logout
            b-nav-item
              nuxt-link(to="/cart")
                font-awesome-icon(icon="shopping-cart")

      </template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "全ての商品" },
        { value: "nigiri", text: "握り" },
        { value: "don", text: "海鮮丼" },
        { value: "makimono", text: "巻物" },
        { value: "siru", text: "汁物" }
      ]
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin;
    }
  }
};
</script>

<style lang="scss" scoped>
.site-header-wrapper {
  font-family: "Myfont";
  background-color: rgba(0, 0, 0, 0.5);
  a {
    font-size: 1.5rem;
    color: cornsilk;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: lightcoral;
      //font-size: 2rem;
      // border: 1px solid lightcoral;
    }
  }
}
.fixed-top {
  background-color: rgba(0, 0, 0, 0.5);
}
.select-form {
  width: 8rem;
}
</style>
