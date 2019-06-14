<template>
  <div class="search-form-wrappar">
    <div class="lineform">
      <div class="select2">
        <select v-model="selected">
          <option selected value>全ての商品</option>
          <option value="chocolate">握り</option>
          <option value="fruits">巻物</option>
          <option value="cheese">海鮮丼</option>
          <option value="new">汁物</option>
        </select>
        <!-- <font-awesome-icon class="angleIcon" icon="caret-down"/> -->
      </div>
      <div class="manual-input">
        <input v-model="keyword" placeholder="キーワードを入力">
      </div>
      <div class="icon">
        <font-awesome-icon class="searchIcon" icon="search" @click="searchForm"/>
      </div>
    </div>
  </div>
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

<style scoped>
.search-form-wrappar {
  box-sizing: border-box;
}
.select2 {
  /* background-color: #0084b4; */
  background-color: #333;
  color: #eee;
  border-radius: 4px 0 0 4px;
}
select {
  z-index: 3;
  cursor: pointer;
  border-radius: 4px 0 0 4px;
  width: 9em;
  height: 3.2em;
  outline: none;
  /* アウトラインは表示されず、太さも0になります。これが初期値です。*/
  text-indent: 0.01px;
  /*text-indentプロパティは、文章の段落などの一行目のインデント幅を指定する際に使用します。インデントには負の値を指定することもできます。*/
  text-overflow: "";
  /*表示されない内容をどのように表示するかをしてする*/
  background: none transparent;
  /*Firefox、Safari、Chromeは、この指定がなくても透過されます。（IEやOperaではこの指定が必要です）*/
  vertical-align: middle;
  /*vertical-alignプロパティは、行のなかでのテキストや画像などの縦方向の揃え位置を指定する際に使用します。*/
  /* top:上端揃え、middle:中央揃え、bottom:下端揃え、他、text-top,text-bottom,super,sub,数値＋単位*/
  font-size: inherit;
  color: inherit;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-indent: 1em;
}
.select2 option {
  /* background-color: #fff; */
  color: #eee;
}

select::-ms-expand {
  display: none;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #eee;
}
.lineform input {
  height: 2.82em;
  width: 12em;
  font-size: inherit;
  /* border-radius: 0 4px 4px 0; */
}
/* .manual-input input {
  widows: 15em;
} */
.lineform {
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: #333 3px solid; */
}
/* .icon {
  vertical-align: middle;
} */
.searchIcon {
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 88%;
  top: 10px;
}
.angleIcon {
  cursor: auto;
  font-size: 30px;
  position: absolute;
  left: 44%;
  top: 10px;
  z-index: 1;
}
</style>


