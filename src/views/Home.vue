<template>
  <div class="home">
    <div class="home__info">
      <InfoBlock />
    </div>

    <div class="home__community">
      <CommunityBlock :users="users" />
    </div>
  </div>
</template>

<script>
import InfoBlock from '@/components/interface/InfoBlock.vue'
import CommunityBlock from '@/components/interface/CommunityBlock.vue'
import Users from '@/mock/users.js'

export default {
  name: 'Home',

  metaInfo() {
    return {
      title: `Hyperion - ${this.$route.meta.title}`
    };
  },

  data() {
    return {
      users: Users
    }
  },

  components: {
    InfoBlock,
    CommunityBlock,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 1200px;
    margin: 0 auto;
  }

  .home__info {
    margin-top: 65px;
  }
</style>
