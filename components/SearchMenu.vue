<template lang="pug">
  div.search-form-wrappar
    div.linefrom
      div.select2
        select(v-model="selected")
          option(selected value) 全ての商品
          option(value="nigiri") 握り
          option(value="fruits") 巻物
          option(value="cheese") 海鮮丼
          option(value="shiru") 汁物
      div.manual-input
        input(v-model="keyword" placeholder="商品名の一部を入力")
      div.icon
        font-awesome-icon.searchIcon(icon="search" @click="searchForm")
</template>

<script>
export default {
  data() {
    return { selected: "", keyword: "" };
  },
  methods: {
    searchForm() {
      this.$store.dispatch("search", {
        select: this.selected,
        keyword: this.keyword
      });
      confirm(`${this.selected}:${this.keyword}`);
      this.$router.push({ path: "/products" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

