<template>
  <div class="social-icons">
    <btn>
      <template v-slot:text>
        <svg-icon
          name="icon_vk"
          class="icon"
        />
      </template>
    </btn>

    <btn>
      <template v-slot:text>
        <svg-icon
          name="icon_inst"
          class="icon"
        />
      </template>
    </btn>

    <btn>
      <template v-slot:text>
        <svg-icon
          name="icon_facebook"
          class="icon"
        />
      </template>
    </btn>
  </div>
</template>

<script>
import btn from '@/components/common/Button.vue'

export default {
  name: 'SocialBlock',

  components: {
    btn
  }
}
</script>

<style lang="scss" scoped>
  .social-icons {
    display: flex;

    button {
      margin-left: 15px;
      opacity: .5;

      &:first-child {
        margin-left: 30px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .icon {
    width: 24px;
    height: 24px;
  }
</style>