<template>
  <nav class="nav">
    <ul class="nav__main">
      <li class="nav__main_element">
        <svg-icon
          name="logo"
          class="logo"
        />
      </li>
      <li class="nav__main_element">
        <ul class="nav__menu">
          <li class="nav__menu_element">
            <router-link to="/">
              <span>
                Home
              </span>
            </router-link>
          </li>

          <li class="nav__menu_element">
            <router-link to="/works">
              <span>
                Works
              </span>
            </router-link>
          </li>

          <li class="nav__menu_element">
            <router-link to="/contests">
              <span>
                Contests
              </span>
            </router-link>
          </li>

          <li class="nav__menu_element">
            <router-link to="/about-us">
              <span>
                About Us
              </span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav__main_element">
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
      </li>
    </ul>
  </nav>
</template>

<script>
import btn from '@/components/common/Button.vue'

export default {
  name: 'Header',

  components: {
    btn
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    align-items: center;
    color: white;
    height: 105px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav__main {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    min-width: 1200px;
    margin: 0 auto;
  }

  .nav__main_element a {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid none;
    padding-bottom: 42px;
    font-size: 16px;

    &:hover {
      opacity: .7;
    }
  }

  .nav__menu {
    display: flex;
    list-style: none;
  }

  .nav__menu_element {
    margin: 0 20px;
  }

  .router-link-exact-active {
    border-bottom: 2px solid #FFA800;
  }

  .logo {
    width: 207px;
    height: 48px;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  button {
    color: white;
  }
</style>
