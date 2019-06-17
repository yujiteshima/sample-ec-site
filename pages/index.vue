<template lang="pug">
  b-container(fluid).page-container
    b-container.top-container
      b-row.top-contents
        b-col.bg-warning.top-img.d-flex.align-items-center.justify-content-center.tate 
          span.top-text 出前寿司
          //- p.tate.display-2 極みし味をお届けします
    b-container.about-container.mt-4
      b-row.about-contents
        b-col(sm="5").about-text-bg.d-flex.align-items-center.justify-content-center.tate
          nuxt-link(to="/search" @click.native="all")
            p
              | 出前寿司
              br
              | 旬との出会い
              br
              |食卓に届けます
              br
              | &emsp; &emsp; 御品書一覧
        b-col(sm="7").bg-sendary.about-img
    b-container.new-countainer.my-3
      b-row.new-contents
        b-col(sm="4").new-text-bg.bg-success.d-flex.align-items-center.justify-content-center.tate
          p
            | 新商品
            br
            | 創作寿司
        b-col(sm="4").bg-dark.new-img1
        b-col(sm="4").bg-info.new-img2
    b-container.special-container.my-3
      b-row.special-contents
        b-col(sm="4").special-text-bg.bg-success.d-flex.align-items-center.justify-content-center.tate
          p
            | 期間限定
            br
            | 数量限定
        b-col(sm="4").bg-dark.special-img1
        b-col(sm="4").bg-info.special-img2
    button(@click="all")
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    //push() {
    //console.log("Hello all!");
    //this.$store.dispatch("all");
    //}
    ...mapActions("product", ["all"])
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  //min-height: 100vh;
}
@mixin hov-item {
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
.title-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.tate {
  color: cornsilk;
  writing-mode: vertical-rl;
  font-family: "Myfont";
}
.yoko {
  color: cornsilk;
  font-family: "Myfont";
}
.top-container {
  background-image: url("../static/images/washi-pakutaso.jpg");
  background-size: cover;
  height: 75vh;
  padding-top: 4.25rem;
}
.top-contents {
  .top-img {
    background-image: url("../static/images/sushi-top-ac.jpg");
    background-size: cover;
    .top-text {
      font-size: 8vw;
    }
  }

  height: 70vh;
}
.about-container {
  // height: 50vh;
}
.about-contents {
  p {
    font-size: 3vw;
  }
  .about-text-bg {
    height: 50vh;
    background-image: url("../static/images/take-unsplash.jpg");
    background-size: cover;
    @include hov-item;
    a {
      color: cornsilk;
      text-decoration: none;
    }
  }
}
.about-img {
  height: 50vh;
  background-image: url("../static/images/sushi-about-shop-pixabay.jpg");
  background-size: cover;
  @include hov-item;
}

.new-container {
  //height: 30vh;
}

.new-contents {
  height: 30vh;
  p {
    font-size: 3vw;
  }
  .new-text-bg {
    height: 30vh;
    background-image: url("../static/images/washitsu1.jpg");
    background-size: cover;
    @include hov-item;
  }
  .new-img1 {
    height: 30vh;
    background-image: url("../static/images/sinsaku1-unsplash.jpg");
    background-size: cover;
    @include hov-item;
  }
  .new-img2 {
    height: 30vh;
    background-image: url("../static/images/sinsaku2-ashinari.jpg");
    background-size: cover;
    @include hov-item;
  }
}
.special-container {
  //height: 30vh;
}
.special-contents {
  height: 30vh;
  p {
    font-size: 3vw;
  }
  .special-text-bg {
    height: 30vh;
    background-image: url("../static/images/washitsu2.jpg");
    background-size: cover;
  }
  .special-img1 {
    height: 30vh;
    background-image: url("../static/images/taidon-ac.jpg");
    background-size: cover;
    @include hov-item;
  }
  .special-img2 {
    height: 30vh;
    background-image: url("../static/images/maguro-tanzaku-ac.jpg");
    background-size: cover;
    @include hov-item;
  }
}
</style>

