<template lang="pug">
  b-container(fluid).page-container
    b-container.top-container
      b-row.top-contents
        b-col
          b-card(
            overlay
            img-src="/images/sushi-top-ac.jpg"
            img-alt="Image"
          )
            b-card-text.display-1.d-flex.align-items-center.justify-content-center.tate 出前寿司
    b-container.about-container.mt3
      b-row.about-content
        b-col(sm="5").about-text-bg.d-flex.align-items-center.justify-content-center.tate.display-4
          p
            | 出前寿司
            br
            | 旬との出会い
            br
            |食卓に届けます
            br
            | &emsp; &emsp; 御品書一覧
        b-col(sm="7")
          b-card(
            overlay
            img-src="/images/sushi-about-shop-pixabay.jpg"
            img-alt="Image"
          )
            b-card-text  旬の香り
    b-contaniner.new-container
            
        b-col(sm="4")
          b-card(
            overlay
            img-src="/images/sushi-top-ac.jpg"
            img-alt="Image"
          )
            b-card-text  旬の香り
        b-col(sm="4")
          b-card(
            overlay
            img-src="/images/sushi-top-ac.jpg"
            img-alt="Image"
          )
            b-card-text  旬の香り
</template>

<style lang="scss" scoped>
 @mixin hov-item{
      cursor: pointer;
        &:hover{
          opacity: 0.5;
        }
    }
    
.tate{
        color:cornsilk;
        writing-mode: vertical-rl;
        font-family: 'Myfont';
      }
    
.top-container{
      background-image: url("../static/images/washi-pakutaso.jpg");
      background-size:cover;
      height: 70vh;
      padding-top: 3.5rem;
    }
.top-contents{
      height: 70vh;
    }

.about-container{
  height: 50vh;
}
.about-contents{
  height: 50vh;
  .about-text-bg{
        background-image:url("../static/images/take-unsplash.jpg");
        background-size:cover;
        @include hov-item
      }
}
</style>

