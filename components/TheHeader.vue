<template lang="pug">
b-container(fluid).header-container
  b-row.site-header
    b-col.nav-wrapper.d-none.d-md-block(md="10" offset-md="1")
      
      b-nav(align="center")
        b-nav-item
         
        b-nav-item.px-1.py-2
          nuxt-link(to='/') Top
        b-nav-item.px-1.py-2
          nuxt-link(to='#login') Login
        b-nav-item.px-1.py-2
          nuxt-link(to='#sign-up') 新規登録
        b-nav-item.px-1.py-2
          nuxt-link(to='/cart')
            font-awesome-icon(icon="shopping-cart")
            span.cart-item-num {{cartCount}}
            span.sum ¥{{sum}}
    b-col.d-md-none
      b-button(v-b-modal.modal-menu)
        font-awesome-icon(icon="bars").bars
      b-modal#modal-menu(title="menu")
        p menu-link
        hr
        p menu-link
        hr
        p menu-link
        hr
        p menu-link
        hr
        p menu-link
        hr
        p menu-link
        hr
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cartCount: 10,
      sum: 980
    };
  }
};
</script>

<style lang="scss" scoped>
.site-header {
  font-family: "Myfont", "Merriweather", serif;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;

  .nav-wrapper {
    width: 80%;
    display: none;

    .nav-item {
      font-size: 1rem;

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
  }
  .bars {
    font-size: 2rem;
    //color:cornsilk
  }
}

// cart
.cart-item-num {
  border-radius: 50%;
  background-color: #de5d50;
  position: absolute;
  left: 71vh;
  top: 2vw;
  font-size: 0.5rem;
  padding: 0.15rem;
}
</style>

