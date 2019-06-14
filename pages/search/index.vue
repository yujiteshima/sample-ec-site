<template lang="pug">
  b-container.page-container
    b-row.page-title-contents
      b-col
        h2.text-center.display-4.py-3 お品書き
    b-row.item-contents
      b-col(sm="3" v-for="product in products" v-bind:key="product.id")
        b-card(
          :title="product.name"
          :img-src="'/images/' + product.filename"
          img-alt="Image"
          img-height="200px"
          img-width="200px"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        ).item-card
          b-card-text
            p name: {{product.name}}
            p price: {{product.price}}
            p count: {{product.count}}
          b-button.d-flex.justify-content-center(v-on:click="addCart(product.id)" variant="primary") カートに入れる
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("product", ["products"])
    //...mapGetters("product", ["products"])
  },
  methods: {
    ...mapActions("cart", ["addCart"])
  }
  // async asyncData({ route, app }) {
  //   const products = await app.$axios.$get(
  //     `http://localhost:3030/api/v1/searches`
  //   );
  //   return { products };
  // },
  //data() {
  // return {
  // message: "Hello Vue.js"
  // products: [
  //   {
  //     id: 1,
  //     name: "hoge",
  //     imgname: "maguro1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 2,
  //     name: "fuga",
  //     imgname: "aji1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 3,
  //     name: "hoge",
  //     imgname: "sa-mon1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 4,
  //     name: "hoge",
  //     imgname: "aji1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 5,
  //     name: "hoge",
  //     imgname: "aji1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 6,
  //     name: "hoge",
  //     imgname: "aji1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   {
  //     id: 7,
  //     name: "hoge",
  //     imgname: "aji1-ac.jpg",
  //     price:180,
  //     count: 1
  //   },
  //   ]
  //};
  //},

  // computed: {
  //   products: {
  //     get() {
  //       return this.$store.getters["getProducts"];
  //     }
  //   }
  // },
  // methods: {
  //   all() {
  //     console.log("go all");
  //     this.$store.dispatch("getTest");
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.item-card {
  background-image: url("../../static/images/dark-banboo-unsplash.jpg");
  background-size: cover;
  background-color: burlywood;
  color: antiquewhite;
}

.page-container {
  padding-top: 4.25rem;
  h2 {
    font-family: "Myfont";
  }
}
</style>
