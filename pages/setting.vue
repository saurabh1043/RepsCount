<template>
  <div class="container">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <nuxt-link class="button is-info is-outlined" to="/">Back</nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half-tablet is-offset-one-quarter-tablet">
        <RepManage />
      </div>
    </div>
    <div class="columns is-mobile is-vcentered">
      <div class="column has-text-right">
        continuously count
      </div>
      <div class="column">
        <v-switch
          :value="continueCount"
          @input="val => $store.commit('continueCount', val)"
          theme="bulma"
          color="blue"
        ></v-switch>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <button class="button is-primary">Test</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RepManage from '@/components/RepManage'

export default {
  components: {
    RepManage
  },

  computed: {
    ...mapGetters([
      'continueCount'
    ])
  }
}
</script>
