<template>
  <div class="topnav">
    <div class="logo" @click="toggle">
      <svg class="icon">
        <use xlink:href="#icon-gulun"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <div class="toggleAside" @click="toggle"></div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    let asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log("Topnav 获取的是aisideVisible:" + asideVisible.value);
    let toggle = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scope>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  color: #051a3c;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg{
        width:32px;
        height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggleAside {
    width: 20px;
    height: 20px;
    // background:red;
    position: absolute;
    left: 15px;
    top: calc(50% - 10px);
    background: transparent;
    transition: all 250ms;
  }
  @media (max-width: 500px) {
    .logo {
      margin: 0 auto;
      transition: all 1s;
    }
    .menu {
      display: none;
    }
    .toggleAside {
      // display:inline-block;
      background: red;
    }
  }
}
</style>