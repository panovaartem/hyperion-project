<template>
  <section class="info-block">
    <div class="info-block__left">
      <h1 class="info-block__head">
        <p class="info-block__head--thin">
          Bring your
        </p>

        <p class="info-block__head--bold">
          ideas to life
        </p>

        <p class="info-block__head--bold-color">
          always
        </p>
      </h1>

      <div class="info-block__actions">
        <btn
          option-class="standart"
          @click="$router.push('auth')"
        >
          <template v-slot:text>
            Login
          </template>

          <template v-slot:rightIcon>
            <svg-icon
              name="icon_login"
              class="icon"
            />
          </template>
        </btn>

        <SocialBlock
          type="horizontal"
        />
      </div>
    </div>
    <div class="info-block__right">
      <div class="info-block__right-block">
        <h3 class="info-block__right-head">
          <span class="info-block__right-number">
            01.
          </span>

          <span class="info-block__right-header">
            Register on the platform
          </span>
        </h3>

        <p class="info-block__right-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisl in laoreet mauris enim.
        </p>
      </div>

      <div class="info-block__right-block">
        <h3 class="info-block__right-head">
          <span class="info-block__right-number">
            02.
          </span>

          <span class="info-block__right-header">
            Submit your work to the platform
          </span>
        </h3>

        <p class="info-block__right-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisl in laoreet mauris enim.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import btn from '@/components/common/Button.vue'
import SocialBlock from '@/components/interface/SocialBlock.vue'

export default {
  name: 'Header',
  components: {
    btn,
    SocialBlock
  }
}
</script>

<style lang="scss" scoped>
  .info-block {
    display: flex;
  }

  .info-block__left {
    width: 50%;
    border-right: 1px solid rgba(255, 255, 255, .1);
  }

  .info-block__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    &-block {
      width: 80%;

      &:last-child {
        margin-top: 70px;
      }
    }

    &-header {
      margin-left: 30px;
    }

    &-text {
      opacity: .5;
      line-height: 1.8;
      margin-top: 15px;
      margin-left: 55px;
    }
  }

  .info-block__head {
    &--thin {
      font-family: 'Rubik-Light';
      font-size: 48px;
    }

    &--bold {
      font-family: 'Rubik-Bold';
      font-size: 64px;
    }

    &--bold-color {
      font-family: 'Rubik-Bold';
      color: #FFA800;
      font-size: 64px;
    }
  }

  .info-block__actions {
    margin-top: 50px;
    display: flex;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  button {
    color: white;
  }
</style>