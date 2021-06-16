<template>
  <section class="community-block">
    <div class="community-block__users">
      <h3>
        Active users
      </h3>

      <ul class="community-block__container left">
        <li
          class="community-block__container-card"
          v-for="item in users"
          :key="item.id"
        >
          <btn option-class="card">
            <template v-slot:text>
              <div class="community-block__container-item">
                <UserInfo :user="item" />
              </div>
            </template>
          </btn>
        </li>

        <li class="community-block__container-card">
          <btn option-class="moreinfo">
            <template v-slot:text>
              <div class="community-block__container-moreinfo">
                <svg-icon
                  name="icon_arrow_right"
                  class="icon"
                />
                <p>More info</p>
              </div>
            </template>
          </btn>
        </li>
      </ul>
    </div>

    <div class="community-block__contests">
      <h3>
        Current contests
      </h3>
    </div>
  </section>
</template>

<script>
import btn from '@/components/common/Button.vue'
import UserInfo from '@/components/common/UserInfo.vue'

export default {
  name: 'CommunityBlock',

  props: {
    users: {
      type: Array,
      default: null
    }
  },

  components: {
    btn,
    UserInfo
  }
}
</script>

<style lang="scss" scoped>
  .community-block {
    margin-top: 100px;
    display: flex;
  }

  .community-block__users {
    width: 50%;
    margin-right: 15px;
  }

  .community-block__contests {
    width: 50%;
    margin-left: 15px;
  }

  .community-block__container {
    margin-top: 15px;
    list-style: none;
    display: flex;
    width: 100%;
    gap: 30px;

    &-card {
      flex-basis: 180px;
    }

    &-item {
      height: 150px;
      width: 100%;
    }

    &-moreinfo {
      height: 150px;
      width: 100%;
    }
  }
</style>