<template lang="pug">
  div
    div#mask(v-bind:class="{hidden:signModal}" @click="close")
    section#modal(v-bind:class="{hidden:signModal}")
      div#close(@click="close")
        font-awesome-icon(icon="times")
      b-container
        b-row
          b-col 新規ユーザー登録ページ
        b-row
          b-col
            input(v-model="name")
        b-row
          b-col
            input(v-model="e-mail")
        b-row
          b-col
            input(v-model="pass")
        b-row
          b-col
            b-button(@click="login")
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "signUpModal",
  data() {
    return {
      name: "",
      email: "",
      pass: ""
    };
  },
  computed: {
    ...mapState("ui", ["signModal"])
  }
};
</script>

<style lang="scss" scoped>
#mask {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}

#modal {
  background-color: azure;
  width: 50vw;
  height: 50vh;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: 0.4s;
  z-index: 102;
}
</style>
