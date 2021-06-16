<template>
  <button
    class="button"
    :class="optionClass"
    :type="type"
    @click="$emit('click')"
  >
    <div
      class="button__left"
      v-if="hasLeftIconSlot"
    >
      <slot
        name="leftIcon"
      />
    </div>

    <slot name="text">
      Текст
    </slot>

    <div
      class="button__right"
      v-if="hasRightIconSlot"
    >
      <slot
        name="rightIcon"
      />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    optionClass: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    hasLeftIconSlot() {
      return !!this.$slots.leftIcon
    },

    hasRightIconSlot() {
      return !!this.$slots.rightIcon
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .button__left {
    margin-right: 10px;
  }

  .button__right {
    margin-left: 10px;
  }

  .standart {
    padding: 11px 50px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: .5s all;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  .card {
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    width: 100%;
    transition: .5s all;

    &:hover {
      opacity: .8;
    }
  }

  .moreinfo {
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .1);
    width: 100%;
    transition: .5s all;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, .2);
    }
  }
</style>