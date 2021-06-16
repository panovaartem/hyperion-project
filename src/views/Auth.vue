<template>
  <div class="auth">
    Auth
  </div>
</template>

<script>
export default {
  name: 'Auth',

  metaInfo() {
    return {
      title: `Hyperion - ${this.$route.meta.title}`
    };
  },
}
</script>

<style lang="scss" scoped>
  .auth {
    width: 1200px;
    margin: 0 auto;
  }
</style>