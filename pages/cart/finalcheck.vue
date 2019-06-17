<template lang="pug">
  b-container.page-container
    b-row.page-title-contents
      b-col
        h2.text-center.display-4.py-3 レジのページ
    b-row.mb-3
      b-col(cols="12").border-bottom
    b-row.mb-3(align-v="center")
      b-col(cols="3").text-center お届け先
      b-col(cols="9").text-center {{emailAddress}} 様の御自宅
    b-row.mb-3
      b-col(cols="12").border-bottom
    b-row.mb-3
      b-col(cols="12")
        h3.text-center.display-5.py-3 ご注文商品一覧
    b-row.mb-3
      b-col(cols="12").border-bottom
    b-row.cart-item-hedding(align-v="center")
      b-col(cols="3").text-center 写真
      b-col(cols="2").text-center 品名
      b-col(cols="2").text-center 価格
      b-col(cols="3").text-center 個数
      b-col(cols="2").text-center 小計
    b-row.cart-item(v-for="item in items" v-bind:key="item.id" align-v="center")
      b-col(cols="3").text-left
        b-img.item-img(:src="'/images/' + item.filename" rounded)
      b-col(cols="2").text-center {{item.name}}
      b-col(cols="2").text-center {{item.price}} 円
      b-col(cols="3").text-center
        span {{item.count}}
      b-col(cols="2").text-center {{item.price*item.count}} 円
    b-row.price-boad
      b-col(cols="12").border-bottom
      b-col(cols="7")
      b-col(cols="3").text-right 合計:
      b-col(cols="2") {{ sum }} 円
    b-row.mb-4
      b-col(cols="12").text-center
        div(@click="finalCheck")
          b-button(size="lg" variant="danger") ご注文確定
      b-col(cols="12").text-center.mt-4
        nuxt-link(to="/cart")
          b-button(size="lg" variant="primary") カートページに戻る
</template>
　
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    sum() {
      let i = 0;
      let sum = 0;
      while (i < this.items.length) {
        sum += this.items[i].count * this.items[i].price;
        i++;
      }
      return sum;
    },
    ...mapState("cart", ["items"]),
    ...mapState("user", ["isLogin", "emailAddress"])
  },
  methods: {
    ...mapActions("cart", ["increment", "decrement", "itemDel", "thanks"]),
    finalCheck() {
      if (confirm("ご注文を確定致しますか？")) {
        this.$store.dispatch("cart/thanks");
        this.$router.push("/cart/thanks");
      }
    }
  },
  mounted() {
    if (this.isLogin) {
      console.log("welcome cart page");
    } else {
      console.log("redirect auth page");
      this.$router.push("/auth");
    }
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: 4.25rem;
  font-family: "Myfont";
  min-height: 93vh;
}
.cart-item-hedding {
  height: 5vh;
}
.cart-item {
  height: 20vh;
  .item-img {
    height: 100%;
    width: 100%;
  }
}
.command {
  &:hover {
    color: red;
  }
}
</style>

