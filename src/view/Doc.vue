<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <transition name="fade">
        <aside v-if="asideVisible" :class="{ x: asideVisible }">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-start">开始</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Swich组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs组件</router-link>
            </li>
            <li>
              <router-link to="/doc/input">Input组件</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    let asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  //   flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px 50px;
    // border-top:1px solid red;
    // background: lightgreen;
  }
}
aside {
  // background-color: lightblue;
  background: linear-gradient(
    145deg,
    rgba(243, 184, 220, 1) 0%,
    rgba(145, 235, 240, 1) 100%
  );
  width: 150px;
  padding: 16px 6px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      padding: 4px 0;
      position: relative;
      > a {
        position: relative;
        height: 40px;
        display: block;
        padding: 16px;
        color:#390450;
        // border: 1px solid red;
        &:hover {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      }
    }
  }
}

main {
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  // border: 1px solid red;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>