<template lang="pug">
  b-container.page-container
    b-row.page-title-contents
      b-col
        h2.text-center.display.py-3 買物籠
    b-row.cart-item-hedding(align-v="center")
      b-col(cols="1").text-center 削除
      b-col(cols="3").text-center 写真
      b-col(cols="2").text-center 品名
      b-col(cols="1").text-center 価格
      b-col(cols="3").text-center 個数
      b-col(cols="2").text-center 小計
    b-row.cart-item(v-for="item in items" v-bind:key="item.id" align-v="center")
      b-col(cols="1").text-center
        span(@click="itemDel(item.id)").command
          font-awesome-icon(icon="times")
      b-col(cols="3").text-left
        b-img.item-img(:src="'/images/' + item.filename" rounded)
      b-col(cols="2").text-center {{item.name}}
      b-col(cols="1").text-center {{item.price}} 円
      b-col(cols="3").text-center
        span.command(@click="decrement(item.id)").p-2
          font-awesome-icon(icon="minus")
        span {{item.count}}
        span.command(@click="increment(item.id)").p-2
          font-awesome-icon(icon="plus")
      b-col(cols="2").text-center {{item.price*item.count}} 円
    b-row.price-boad
      b-col(cols="12").border-bottom
      b-col(cols="7")
      b-col(cols="3").text-right 合計:
      b-col(cols="2") {{ sum }} 円
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
    ...mapState("cart", ["items"])
  },
  methods: {
    ...mapActions("cart", ["increment", "decrement", "itemDel"])
    // increment(id) {
    //   console.log("increment!!!!!!!!!!!!!!!!!!!!");
    // },
    // decrement(id) {
    //   console.log("decremetn!!!!!!!!!!!!!!!!!!!!!");
    // }
    //...mapAction("cart", ["increment", "decremet"])
    // increment(id) {
    //   let item = this.items.find(cart => {
    //     return cart.id === id;
    //   });
    //   this.$store.cart.dispatch("increment", id);
    // },
    // decriment(id) {
    //   let item = this.items.find(cart => {
    //     return cart.id === id;
    //   });
    //   this.$store.cart.dispatch("decrement", id);
    // }
  }
  // data() {
  //   return {
  //     items: [
  //       {
  //         id: 1,
  //         name: "鮪",
  //         filename: "maguro1-ac.jpg",
  //         price: 180,
  //         count: 1
  //       }
  //     ]
  //   };
};
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: 4.25rem;
  font-family: "Myfont";
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

