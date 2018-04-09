<template>
  <div class="container">
    <div class="columns is-mobile is-vcentered">
      <div class="column">
        continuously count
      </div>
      <div class="column">
        <v-switch :value="continueCount" @input="val => $store.commit('continueCount', val)" theme="bulma" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'continueCount'
    ])
  }
}
</script>
