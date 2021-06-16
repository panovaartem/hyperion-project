<template>
  <div class="user-info">
    <img :src="user.img">
    <p>
      {{ user.name }}
    </p>
    <div>
      <span>
        {{ user.rate }}
      </span>
      <svg-icon
        name="icon_rate"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',

  props: {
    user: {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss" scope>
  .user-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: 23px;
    height: 23px;
  }
</style>