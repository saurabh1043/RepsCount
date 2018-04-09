<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column">
        <h4 class="title is-4">reps: {{ repCount }}</h4>
      </div>
      <div class="column has-text-right">
        <h4 class="title is-4">{{ currentRepState.state }}</h4>
      </div>
    </div>
    <Timer :time="currentRepState" :start="startTiming" @timeout="timeout" />
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button
          class="button is-outlined"
          :class="startTiming ? 'is-danger' : 'is-success'"
          @click="startTimer"
        >
          {{ startTiming ? 'Stop' : 'Start'}}
        </button>
      </div>
      <div class="control">
        <button
          class="button is-info is-outlined"
          @click="resetTimer"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timer from '@/components/Timer.vue'

export default {
  components: {
    Timer
  },

  data () {
    return {
      startTiming: false,
      repState: 0,
      repCount: 0
    }
  },

  computed: {
    ...mapGetters([
      'rep',
      'continueCount'
    ]),
    currentRepState () {
      return this.rep[this.repState]
    }
  },

  methods: {
    startTimer () {
      this.startTiming = !this.startTiming
    },
    timeout () {
      this.startTiming = this.continueCount
      if (++this.repState >= this.rep.length) {
        this.repState = 0
        ++this.repCount
      }
    },
    resetTimer () {
      this.$store.commit('reset', true)
      this.repState = 0
      this.repCount = 0
    }
  }
}
</script>
