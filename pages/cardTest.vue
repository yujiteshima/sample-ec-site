<template lang="pug">
  b-container.top-container
    b-row.top-contents
      b-col
        b-card(
          overlay
          img-src="/images/sushi-top-ac.jpg"
          img-alt="Image"
        )
          b-card-text.display-1.d-flex.align-items-center.justify-content-center.tate 出前寿司
    b-row
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
      b-col(sm="4")
        b-card(
          overlay
          img-src="/images/sushi-top-ac.jpg"
          img-alt="Image"
        )
          b-card-text  旬の香り
</template>

<style lang="scss" scoped>
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
</style>

