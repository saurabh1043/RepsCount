<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>state</th>
        <th>minutes</th>
        <th>seconds</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(state, i) in rep" :key="i">
        <td>
          <input type="text" class="rep-input" :value="state.state" placeholder="state" />
        </td>
        <td>
          <input type="text" class="rep-input" :value="state.minutes" placeholder="minutes" />
        </td>
        <td>
          <input type="text" class="rep-input" :value="state.seconds" placeholder="seconds" />
        </td>
      </tr>
      <tr>
        <td class="has-text-centered" colspan="3">
          <a @click="$store.commit('addRep')">add</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'rep'
    ])
  }
}
</script>

<style lang="scss" scoped>
.rep-input {
  width: 100%;
  padding: 0.25rem 0.75rem;
  margin: 0;
  border: none;
  font-size: 1.25rem;

  &:focus {
    outline: none;
    border-bottom: 2px solid #1e74ff;
  }
}
</style>
