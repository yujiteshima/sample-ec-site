<template lang="pug">
  div
    div
      b-alert( show dismissible) Dismissible Alert! Click the close button over there
        b &rArr

    b-container
      b-row
        b-col(sm="3").bg-primary 1
        b-col(sm="3").bg-info 2
        b-col(sm="3").bg-success 3
        b-col(sm="3").bg-warning 4
      div
        b-card(
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        )
          b-card-text Some quick example text to build on the card title and make up the bulk of the card's content.
          b-button(
            href="#" variant="primary"
          ) Go somewhere
      div
        b-nav(justified)
          b-nav-item(active) home
          b-nav-item about
          b-nav-item login
          b-nav-item cart









</template>


