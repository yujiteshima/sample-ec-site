<template lang="pug">
  b-container.page-container
    b-row.page-title-contents
      b-col
        h2.text-center.display-4.py-3 お品書き
    b-row(align-h="center").select-menu.mb-4
      b-col(cols="2" @click="nigiri").text-center.select-text 握寿司
      b-col(cols="2" @click="kaisen").text-center.select-text 海鮮丼
      b-col(cols="2" @click="siru").text-center.select-text 汁物
      b-col(cols="2" @click="sousaku").text-center.select-text 創作寿司
    b-row(align-h="center").genre-menu.mb-4
      b-col(cols="4").text-center
        span(@click="all").px-2.all 全て
        span.px-2 |
        span.px-2 {{genre}}

    b-row.item-contents
      b-col(sm="4" v-for="product in products" v-bind:key="product.id")
        b-card(
          :title="product.name"
          :img-src="'images/' + product.filename"
          img-alt="Image"
          img-height="200px"
          img-width="200px"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        ).item-card
          b-card-text
            //- p name: {{product.name}}
            p 価格　: {{product.price}} 円
            p 個数　: {{product.count}} 個
          b-button.d-flex.justify-content-center(v-on:click="addCart(product.id)" @click="makeToast(product.name)" variant="primary") カートに入れる

          
    PageNation
</template>

<script>
import PageNation from "../../components/Pagenation";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    PageNation
  },
  computed: {
    ...mapState("product", ["products"]),
    ...mapState("user", ["isLogin"]),
    genre() {
      let genre = this.$store.state.product.mode;
      let genre_name = "";
      if (genre == "all") {
        genre_name = "";
      } else if (genre == "nigiri") {
        genre_name = "握り";
      } else if (genre == "kaisen") {
        genre_name = "海鮮丼";
      } else if (genre == "sousaku") {
        genre_name = "創作寿司";
      } else if (genre == "siru") {
        genre_name = "汁物";
      }
      return genre_name;
    }
    //...mapGetters("product", ["products"])
  },
  methods: {
    ...mapActions("cart", ["addCart"]),
    ...mapActions("product", [
      "all",
      "nigiri",
      "kaisen",
      "siru",
      "sousaku",
      "select"
    ]),
    makeToast(name) {
      this.$bvToast.toast(`${name}をお買い物籠に入れました。`, {
        title: `有難う御座います。`,
        variant: "success",
        solid: true
      });
    }
  },
  mounted() {
    console.log(this.isLogin);
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
  min-height: 93vh;
  padding-top: 4.25rem;
  h2 {
    font-family: "Myfont";
  }
}

.select-menu {
  font-family: "Myfont";
  font-size: 2rem;
  .select-text {
    &:hover {
      color: crimson;
      cursor: pointer;
      // border-bottom: 3px solid skyblue;
    }
  }
}

.genre-menu {
  font-family: "Myfont";
  font-size: 2rem;
  .all {
    &:hover {
      color: crimson;
      cursor: pointer;
      // border-bottom: 3px solid skyblue;
    }
  }
}
</style>
