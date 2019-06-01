<template lang="pug">
b-container(fluid).site-container
  b-container().top-container
    b-row.top-contents
      b-col(md="1" ).h2.top-text1.text-right.display-1 出前寿司
      b-col(md="1" ).h2.top-text1.text-right 極みし味をお届けします
  b-container.about-shop-container.mt-2
    b-row(align-v="center").about-shop-contents
      b-col(md="6").text-center
        p 出前寿司
        p 旬との出会い
        p 食卓に届けます
      b-col(md="6")
        b-img(fluid rounded src="../static/images/sushi-about-shop-pixabay.jpg" alt="Image 3")
  b-container.new-item-container
    b-row(align-v="center").new-item-contents
      b-col(md="4")
        p 新商品
        p 創作寿司
      b-col(md="4")
        b-img(fluid rouded src="../static/images/sinsaku1-unsplash.jpg")
      b-col(md="4")
        b-img(fluid rouded src="../static/images/sinsku2-ashimashinari.jpg")
  b-container.special-container
    b-row(align-v="center").special-contents
      b-col(md="4")
        p 特集
        p 企画
      b-col(md="4")
        b-img(fluid rounded src="../static/images/maguro-tanzaku-ac.jpg")
      b-col(md="4")
        b-img(fluid rounded src="../static/images/kaisen1-ac.jpg")
  b-container.news-container
    b-row(align-v="center").special-contents
      b-col(md="4") 新着 NEWS
      b-col(md="8") 2019/6/5 サイトオープン
</template>

<style lang="scss" scoped>
  @mixin page-container {
    position: relative;
    height: 100vh;
  }
  @mixin page-contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  // Siteコンテナ
  .site-container{
    background-image: url("../static/images/washi-pakutaso.jpg");
    background-size:cover;
    padding:0;
    border:solid 1px red;
  }
  // TOPページ
  .top-container{
    position: relative;
    height: 70vh;
    //width:80%;
    padding:0;
    background-image:url("../static/images/sushi-top-ac.jpg");
    background-size:cover;
    border:solid 1px #000;
    .top-contents{
      @include page-contents;
      .top-text1{
        color:cornsilk;
        writing-mode: vertical-rl;
        font-family: 'Myfont';
      }
    }
  }
  // About Shop

  .about-shop-container{
    position: relative;
    height: 20vh;
    padding:0;
    border:solid 1px #000;
    .about-shop-contens{
      @include page-contents;
    }
  }
  // NewItem

  .new-item-container{
    position:relative;
    height: 20rem;
    padding:0;
    border:solid 1px #000;
    .new-item-contents{
      @include page-contents;
    }
  }

  // News
  .news-container{
    position:relative;
    height: 20rem;
    padding: 0;
    border:solid 1px #000;
    .new-item-contents{
      @include page-contents;
    }
  }
</style>
