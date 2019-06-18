<template lang="pug">
  b-container.page-container
    b-row.page-title-contents
      b-col
        h2.text-center.py-3 買物籠
    b-row.cart-item-hedding(align-v="center")
      b-col(cols="1").text-center 削除
      b-col(cols="3").text-center 写真
      b-col(cols="2").text-center 品名
      b-col(cols="1").text-center 価格
      b-col(cols="2").text-center 個数
      b-col(cols="2").text-center 小計
    b-row.cart-item(v-for="item in items" v-bind:key="item.id" align-v="center")
      b-col(cols="1").text-center
        span(@click="itemDel(item.id)").command
          font-awesome-icon(icon="times")
      b-col(cols="3").text-left
        //- b-img.item-img(:src="'require(\'' + '../../assets/images/' + item.filename + '\')'" rounded)
        //- b-img.item-img(:src=require('"~/assets/images/"+ item.filename ') rounded)
        //- b-img.item-img(:src="'/_nuxt/assets/images/' + item.filename ")
        b-img.item-img(:src="'images/' + item.filename")
      b-col(cols="2").text-center {{item.name}}
      b-col(cols="1").text-center {{item.price}} 円
      b-col(cols="2").text-center
        span.command(@click="decrement(item.id)").p-3
          font-awesome-icon(icon="minus")
        span {{item.count}}
        span.command(@click="increment(item.id)").p-3
          font-awesome-icon(icon="plus")
      b-col(cols="2").text-center {{item.price*item.count}} 円
    b-row.price-boad
      b-col(cols="12").border-bottom
      b-col(cols="7")
      b-col(cols="3").text-right 合計:
      b-col(cols="2") {{ sum }} 円
    b-row.mb-4
      b-col(cols="12").text-center
        nuxt-link(to="/cart/finalcheck")
          b-button(size="lg" variant="primary") レジに進む
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
    ...mapState("user", ["isLogin"])
  },
  methods: {
    ...mapActions("cart", ["increment", "decrement", "itemDel"])
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
  .page-title-contents {
    h2 {
      font-size: 4vw;
    }
  }
}
.cart-item-hedding {
  height: 5vh;
  font-size: 1.5vw;
}
.cart-item {
  height: 20vh;
  font-size: 1.5vw;
  .item-img {
    height: 100%;
    width: 100%;
  }
}
.command {
  &:hover {
    color: red;
    font-size: 2vw;
  }
}

.price-boad {
  font-size: 2.5vw;
}
</style>

