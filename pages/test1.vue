<template lang="pug">
  b-container
    b-row
      b-col.bg-success(sm="6") 1 of 2
      b-col.bg-primary(sm="6") 2 of 2
    div.w-100
    b-row
      b-col.bg-success(sm="4") 1 of 3
      b-col.bg-primary(sm="4") 2 of 3
      b-col.bg-warning(sm="4") 3 of 3
    
    div
      b-button(v-b-modal.modal-1) Launch demo modal
      b-modal#modal-1(title="BootstrapVue")
        p.my-4 Hello from modal!
</template>
