# Nuxt Projectの立ち上げ




```
$ npx create-nuxt-app sample-ec-site
```

```
? Project name sample-ec-site
? Project description My splendid Nuxt.js project
? Use a custom server framework none
? Choose features to install Axios
? Use a custom UI framework bootstrap
? Use a custom test framework none
? Choose rendering mode Universal
? Author name Yuji Teshima
? Choose a package manager yarn
```

### bootstrap-vueのバージョンの固定
```js
 "bootstrap-vue": "2.0.0-rc.20",
 ```
これをしないとエラーとなる。
このエラーの解決策を調べている間に３日使う
issuesが上がってくれて初めて解決できた。
nuxtとnodeのバージョンをいじっていたが、このような場合はまず、影響しているmoduleの方のバージョンをいじってみるものなのかもしれない。
時間を使ってしまったがその間にNuxtのドキュメントをよく読めたので良かったと思いたい。
https://github.com/nuxt/nuxt.js/issues/5822

### pug導入

```
$ yarn add -D pug pug-plain-loader
```

## FontAwesome導入
ここに書かれている通りで導入出来た。
https://www.npmjs.com/package/nuxt-fontawesome

```
$ npm i nuxt-fontawesome
$ npm i @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome
$ npm i @fortawesome/free-solid-svg-icons
```

nuxt.config.jsでmodulsにnuxt-fontawesomeを追加

```js
// nuxt.config.js
module.exports = {
 modules: [
  ...

    'nuxt-fontawesome' //ここに追記
  ],

  ...

//この部分を追記
 fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
```

正直 VueCLIでの導入よりスッキリしていて驚いた。
テストページで確認してOK。
```
<template lang="pug>
font-awesome-icon(icon="home")
</template>
```

## 今回のEC-siteの全体像
```
└── pages
    ├── index.vue // TopPage
    └── favorit.vue // favoritPage
    └── search
    │   ├── index.vue // searchPage
    │   └── _id.vue // itemDetailPage
    └── cart
        ├── index.vue // cartTopPage
        ├── finalcheck.vue // 最終確認画面
        └── thanks.vue // thanksPage
```

cartPageの構成については、通常のECサイトであれば、
カートページ→注文内容、届け先、お客様情報、支払い方法が変更出来る確認ページ、注文内容は変更出来ないが、内容の確認がしやすいUIの最終確認のページを経てサンクスページへと推移していくというものが多いように思う。今回のカートページはそれからみると簡易的なものであるが、今後、機能拡大をしていければと思う。

Storeでの状態管理

```
└── store
    ├── index.js
    └── products
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   └── mutations.js
    └── users
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   └── mutations.js
    └── carts
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   └── mutations.js
    └── uis
        ├── actions.js
        ├── getters.js
        ├── index.js
        └── mutations.js
```

store/index.jsで各モジュールをimport

```js
// store/index.js

import Vuex from 'vuex'
import postsModule from './posts'
import usersModule from './users'

new Vuex.Store({
  modules: {
    products: productsModule,
    users: usersModule,
    carts: cartsModule,
    ui: uiModule,
  }
})
```

### 各モジュールのindex.jsに処理をimportする
actions、getters,mutationsをindex.jsでimportしておく
また、今回は各stateについてはモジュール内のindex.jsで定義する
namespaced: true にしておくことによって、他モジュールやcomponentからは、モジュール名/postDatasやモジュール名/アクション名 といったかんじで呼び出すことができる

```js
// store/products/index.js
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
 ...
})

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
```

各々の処理を定義

以下のようにやっていく（例ではアクション）
```js
// store/products/actions.js
export default {
  async fetchProductsBy({ commit }, { id }) {
    ....
  },
...
}
```
このケースだと、posts/fetchPostByでこのアクションを呼び出すことができる。
ただし、同じpostsモジュール内の場合だとfetchPostByで呼び出すことが可能。

## sass導入
```
$ npm install node-sass sass-loader style-loader
```

## b-img使えない事に対する処置

「こちらにテキストをこちらに画像を貼って２カラムのレイアウト作るぞ。」

```pug
b-container.hoge-container
  b-row(align-v="center").hoge-contents
    b-col(md="6")
      p hogehoge
    b-col(md="6")
      b-img(fluid src="../static/images/hoge.jpg" alt="hoge")
```

上手くいきません。またタイポか〜。。

ググります。公式にありました。
> https://bootstrap-vue.js.org/docs/reference/images/

大体の内容は、vue-loaderは```<img>```タグのsrc属性のに相対パスを書いても自動的に変換するけど、BootstrapVueカスタムコンポーネントの場合は自動的には変換しませんよ。

不親切です。
```b-img```何て特別な書き方してて、ただでも初級者には、bootstrapやっとうろ覚えてきたに、また方言〜というところなのに、デフォルトでは使えないから、よろしくねなんて。。。

気をとり直して読んでいくと、Vue-Loaderのoption設定で```b-img```とか```b-card```とかに相対URLが結びつくように設定してよとVue-CLI3とNuxtでの設定方法が書いてありした。

```js
module.exports = {
  build: {
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  }
}
```

これで画像が表示されました。

またrequire使っても出来るようです。


```pug
b-img(:src="require('../static/hoge.jpg')")

b-card-img(:img-src="require('../static/picture.jpg')"
```

### まとめ
デフォルトで当たり前のよう出来そうで出来ない。
webpackの周りの復習が出来たし、Nuxt、vue-loaderの公式の今まで読んでなかったページをまじまじと読めたのでよしとします。

### 該当箇所のソースです。

----
Nuxt　=>  https://ja.nuxtjs.org/api/configuration-build/
bootstrap-vue =>  https://bootstrap-vue.js.org/docs/reference/images/
vue-loader => https://vue-loader.vuejs.org/options.html#transformasseturls

Product.create(name:"",price:100,genre:"fruits",stocks:100,comments:"春の新作です。",count:1)

## DB設計
### Product Table
id
name
price
genre: "期間限定","にぎり", "軍艦・巻物","海鮮丼"
comments
count:1
filename:string