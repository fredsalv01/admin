<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="header">
      <div class="logo">
        <img src="../assets/vue.svg" alt="vue">
      </div>
      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-icons" :class="`${is_expanded ? 'is-expanded' : 'is-collapsed'}`">
            keyboard_double_arrow_right
          </span>
        </button>
      </div>
    </div>
  </aside>  
</template>

<script setup>
import { ref } from 'vue'

  const is_expanded = ref(false)

  const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
  }
</script>

<style lang="scss" scoped>
aside {
  background: var(--dark);
  color: var(--light);
  width: calc(2rem + 2rem);
  height: 100vh;
  position: fixed;
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
      padding: 0.5rem;
      border-radius: 50%;
      background: var(--dark-alt);
      transition: 0.3s ease-in-out;

      &:hover {
        background: var(--primary);
      }

      span {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.7s ease-out;

        &.is-expanded {
          transform: rotate(180deg);
          
        }

        &.is-collapsed {
          transform: rotate(0deg);
        }
        @media (max-width: 1024px) {
          font-size: 1.2rem;
        }
      }
    }

    // button{
    //   width: 2rem;
    // }
  }

  &.is-expanded {
    width: var(--sidebar-width);
    
    .menu-toggle-wrap {
      top: -3rem;
    }
  }

  @media (max-width: 700px) {
    position: fixed;
    z-index: 99;
    width: 6rem;
  }
}


</style>