<template>
  <section class="container">
    <div>
      <!-- 新規登録フォーム -->
      <section v-if="!isLogin">
        <h5>新規登録</h5>
        <p>
          <input type="email" v-model="mailAddress" placeholder="メールアドレス" required>
          <span　v-if="!email" class="email">〜＠〜の形式で入力して下さい</span>
        </p>
        <p>
          <input type="password" v-model="password" placeholder="パスワード" required>
          <span v-if="!error" class="pass">パスワードは半角英数字６文字以上でお願いします。</span>
        </p>
        <div class="links">
          <button @click="regist()">新規登録</button>
        </div>
      </section>

      <!-- ログインフォーム -->
      <section v-if="!isLogin">
        <h5>ログイン</h5>
        <p>
          <input type="email" v-model="mailAddress" placeholder="メールアドレス" required>
          <span　v-if="!email" class="email">〜＠〜の形式で入力して下さい</span>
        </p>
        <p>
          <input type="password" v-model="password" placeholder="パスワード" required>
          <span v-if="!error" class="pass">パスワードは半角英数字６文字以上でお願いします。</span>
        </p>
        <div class="links">
          <button @click="login()">ログイン</button>
        </div>
      </section>

      <!-- マイページ -->
      <section v-if="isLogin">
        <h5>ログイン中です</h5>
        <!-- ログイン中ユーザーのメールアドレスを表示 -->
        <p>メールアドレス：{{$store.state.user.emailAddress}}</p>
        <div class="links">
          <button @click="logout()">ログアウト</button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      mailAddress: "",
      password: "",
      content: ""
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin;
    },
    error() {
      return this.password.length >= 6;
    },
    email() {
      return this.mailAddress.match( /.+@.+/)
    }
  },
  methods: {
    init: function() {
      this.password = "";
      this.mailAddress = "";
      this.content = "";
    },
    regist: function() {
      console.log("regist");
      this.$store.dispatch("user/regist", {
        mailAddress: this.mailAddress,
        password: this.password
      });
      this.init();
    },
    login: function() {
      this.$store.dispatch("user/login", {
        mailAddress: this.mailAddress,
        password: this.password
      });
      this.init();
      this.getMessages();
    },
    getMessages: function() {
      this.$store.dispatch("message/load");
    },
    addMessage: function() {
      this.$store.dispatch("message/add", { messageContent: this.content });
      this.init();
    },
    logout: function() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>

<style scoped>
.container {
  padding: 100px;
  min-height: 93vh;
}
.pass, .email {
  color: tomato;
}
</style>