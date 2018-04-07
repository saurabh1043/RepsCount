<template>
  <section class="container">
    <h1 class="title">
      Reps Count [state: {{ currentRepState.state }}]
    </h1>
    <h3 class="title">reps: {{ repCount }}</h3>
    <Timer :time="currentRepState" :start="startTiming" :resetted="repCount === 0" @timeout="timeout" />
    <button
      class="button"
      :class="startTiming ? 'is-danger' : 'is-success'"
      @click="startTimer"
    >
      {{ startTiming ? 'Stop' : 'Start'}}
    </button>
    <button
      class="button is-info"
      @click="resetTimer"
    >
      Reset
    </button>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  components: {
    Timer
  },

  data () {
    return {
      startTiming: false,
      rep: [
        { state: 'workout', minutes: 0, seconds: 30 },
        { state: 'rest', minutes: 0, seconds: 10 }
      ],
      repState: 0,
      repCount: 0,
      continue: false
    }
  },

  computed: {
    currentRepState () {
      return this.rep[this.repState]
    }
  },

  methods: {
    startTimer () {
      this.startTiming = !this.startTiming
    },
    timeout () {
      this.startTiming = this.continue
      if (++this.repState >= this.rep.length) {
        this.repState = 0
        ++this.repCount
      }
    },
    resetTimer () {
      this.repState = 0
      this.repCount = 0
    }
  }
}
</script>
