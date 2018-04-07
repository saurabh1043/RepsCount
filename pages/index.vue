<template>
  <section class="container">
    <h1 class="title">
      Reps Count
    </h1>
    <Timer :time="time" :start="startTiming" @timeout="startTiming = false" />
    <button
      class="button"
      :class="startTiming ? 'is-danger' : 'is-success'"
      @click="startTimer"
    >
      {{ startTiming ? 'Stop' : 'Start'}}
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
      time: {
        minutes: 1,
        seconds: 3
      }
    }
  },

  methods: {
    startTimer () {
      this.startTiming = !this.startTiming
    }
  }
}
</script>
