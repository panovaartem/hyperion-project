<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/interface/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" src="./styles/main.scss" />
