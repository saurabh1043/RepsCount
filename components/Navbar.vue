<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link  class="navbar-item" to="/">
        <h1 class="title is-4">RepsCount</h1>
      </nuxt-link >
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="activeMenu = !activeMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': activeMenu}">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/setting">
          setting
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      activeMenu: false
    }
  },

  watch: {
    '$route' () {
      this.activeMenu = false
    }
  }
}
</script>

