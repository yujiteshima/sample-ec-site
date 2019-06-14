<template lang="pug">
  div
    b-navbar(toggleable="lg" type="dark" variant="info")
      b-navbar-brand 出前寿司
      b-navbar-toggle(target="nav-collapse")
      b-collapse(is-nav)#nav-collapse
        b-navbar-nav
          b-nav-item
            nuxt-link(to="/") Top
          b-nav-item
            nuxt-link(to="/login") Login
          b-nav-item
            nuxt-link(to="/signUp") 新規登録
          b-nav-item
            nuxt-link(to="/cart")
              font-awesome-icon(icon="shopping-cart")


        b-navbar-nav.ml-auto
          b-nav-form
            b-form-input(size="sm" placeholder="Search")
            b-button(size='sm' placeholder="Search") Search
        
          b-nav-item-dropdown(text="Lang" right)
            b-dropdown-item
              nuxt-link(to="/") Top
            b-dropdown-item
              nuxt-link(to="/login") Login
            b-dropdown-item
              nuxt-link(to="/signUp") 新規登録
            b-dropdown-item
              nuxt-link(to="/cart")
                font-awesome-icon(icon="shopping-cart")
          b-nav-item-dropdown(right)
            template(slot="button-content")
              em User
            b-dropdown-item
              nuxt-link(to="/") Profile
            b-dropdown-item
              nuxt-link(to="/") Sign Out
      </template>
