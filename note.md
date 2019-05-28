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