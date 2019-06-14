// UserAPIのインポート
import UserAPI from "@/api/UserAPI"

export const state = () => ({
  isLogin: false,
  emailAddress: ""
})

export const mutations = {
  // ユーザー情報を設定します。
  setEntity(state, user) {
    state.emailAddress = user.email;
  },
  // stateを初期化します。
  clear(state) {
    state.emailAddress = "";
    state.isLogin = false;
  },
  // ログイン状態を設定します。
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  }
}

export const actions = {
  // ユーザー情報を取得します。
  load: ({
    commit
  }) => {
    var currentUser = UserAPI.getUser();
    if (currentUser) {
      // ログイン済み
      commit('setIsLogin', true);
      commit('setEntity', currentUser);
    } else {
      // 未ログイン
      commit('setIsLogin', false);
      commit('clear');
    }
  },
  // 新規ユーザー登録を行います。
  regist: ({
    commit,
    dispatch
  }, payload) => {
    return UserAPI.regist(payload.mailAddress, payload.password)
      .then((res) => {
        commit('setIsLogin', true);
        dispatch('setEntity', res.user);
      })
      .catch(function (error) {
        commit('setIsLogin', false);
        commit('clear');
      });
  },
  // ユーザーログインを行います。
  login: ({
    commit,
    dispatch
  }, payload) => {
    return UserAPI.login(payload.mailAddress, payload.password)
      .then((res) => {
        commit('setIsLogin', true);
        dispatch('setEntity', res.user);
      })
      .catch(function (error) {
        commit('setIsLogin', false);
        commit('clear');
      });
  },
  // ログアウトを行います。
  logout: ({
    commit
  }) => {
    return UserAPI.logout()
      .then((res) => {
        commit('setIsLogin', false);
        commit('clear');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 新規ユーザー登録を行います。
  setEntity: ({
    commit
  }, user) => {
    commit('setEntity', user);
  }
}
