<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="vue" />
    </div>
    <div class="menu-toggle-wrap">
      <button
        class="menu-toggle"
        :class="`${is_expanded && 'active'}`"
        @click="ToggleMenu"
      >
        <span
          class="material-icons"
          :class="`${is_expanded ? 'is-expanded' : 'is-collapsed'}`"
        >
          keyboard_double_arrow_right
        </span>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-icons">description</span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/team">
        <span class="material-icons">group</span>
        <span class="text">Team</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>
    <div class="flex">
      <h3>Menu</h3>
      <div class="menu">
        <router-link class="button" to="/settings">
          <span class="material-icons">settings</span>
          <span class="text">Settings</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  background: var(--dark);
  color: var(--light);
  width: calc(2rem + 2rem);
  height: 100vh;
  // position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.5s ease-out;

    .menu-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 50%;
      background: var(--dark-alt);
      transition: 0.5s ease-in-out;

      &:hover {
        background: var(--primary);
        span.material-icons {
          color: var(--dark);
        }
      }

      span.material-icons {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.2s ease-out;

        &.is-expanded {
          transform: rotate(-180deg);
          color: var(--dark);
        }

        &.is-collapsed {
          transform: rotate(0deg);
        }
      }
    }
    .active {
      background: var(--primary);
      span {
        color: var(--dark);
      }
    }
  }

  h3,
  .button .texxt {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.1s ease-in-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        margin-right: 1rem;
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
    }

    h3,
    .button .text {
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    position: fixed;
    z-index: 99;
    width: 6rem;
  }
}
</style>
