<template>
  <div>
    <Navbar />
    <section class="section">
      <nuxt/>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

