<template>
    <h1 class="title is-1 has-text-centered">
      {{ this.minutes | numeral('00') }} : {{ this.seconds | numeral('00') }}
    </h1>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  props: {
    time: {
      type: Object,
      required: true
    },
    start: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      minutes: null,
      seconds: null,
      timer: null
    }
  },

  computed: {
    ...mapGetters([
      'resetted'
    ])
  },

  watch: {
    time (data) {
      this.minutes = data.minutes
      this.seconds = data.seconds
    },
    start (data) {
      if (data) {
        this.timer = setInterval(() => {
          if (this.seconds <= 0 && this.minutes > 0) {
            this.seconds = 59
            this.minutes--
          } else if (this.minutes <= 0 && this.seconds <= 0) {
            this.$emit('timeout')
            this.minutes = this.time.minutes
            this.seconds = this.time.seconds
          } else {
            this.seconds--
          }
        }, 1000)
      } else {
        clearInterval(this.timer)
      }
    },
    resetted (data) {
      if (data) {
        this.minutes = this.time.minutes
        this.seconds = this.time.seconds
        this.$store.commit('reset', false)
      }
    }
  },

  mounted () {
    this.minutes = this.time.minutes
    this.seconds = this.time.seconds
  }
}
</script>

<style lang="scss" scoped>
</style>
