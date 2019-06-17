<template lang="pug">
  b-container(v-if="paginationDisplay")
    b-row.page-nation-containar
      b-col
        ul.page-nation
          li(@click="paging(1)" :class="{pageCursor: preCursor}")
            font-awesome-icon(icon="angle-double-left" :class="{pageCursor: preCursor}")
          li(@click="paging(current-1)" :class="{pageCursor: preCursor}")
            font-awesome-icon(icon="angle-left" v-bind:class="{pageCursor: preCursor}")
          li(v-for="(value, index) in pageObject" @click="paging(value)" v-bind:class="{Current:value == current}") {{value}}
          li(@click="paging(current+1)" v-bind:class="{pageCursor: nextCursor}")
            font-awesome-icon(icon="angle-right" :class="{pageCursor: nextCursor}")
          li(@click="paging(-1)" v-bind:class="{pageCursor: nextCursor}")
            font-awesome-icon(icon="angle-double-right" v-bind:class="{pageCursor: nextCursor}")
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("product", [
      "products",
      "current",
      "paginationDisplay",
      "pageObject",
      "mode",
      "displayItem",
      "lastPage",
      "select",
      "keyword"
    ]),
    // pagenationData() {
    //   return this.$store.state.pM.pageObject;
    // },
    // pagenationDisplay() {
    //   //return true;
    //   return this.$store.state.pM.paginationDisplay;
    // },
    // currentPage() {
    //   return this.$store.state.pM.current;
    // },
    // lastPage() {
    //   return this.$store.state.pM.lastPage;
    // },
    preCursor() {
      if (this.current === 1) {
        return true;
      } else {
        return false;
      }
    },
    nextCursor() {
      if (this.current === this.lastPage) {
        return true;
      } else {
        return false;
      }
      // }
    }
  },
  methods: {
    ...mapActions("product", ["paging"])
  }
};
</script>


<style lang="scss" scoped>
.page-nation-containar {
  text-align: center;
  font-family: "Myfont";
}
.page-nation {
  display: flex;
  justify-content: center;
  list-style: none;
}
.page-nation li {
  font-size: 2em;
  display: block;
  padding: 0.5em;
  border-right: solid 1px lightgray;
  border-left: solid 1px lightgray;
  color: mediumblue;
}

.page-nation li:hover {
  background-color: #ddd;
}
.Current {
  background-color: skyblue;
}
.pageCursor {
  pointer-events: none;
  color: lightgray;
}
</style>
