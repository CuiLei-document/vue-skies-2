<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>咕噜UI</h1>
        <h2>一个不错的UI组件</h2>
        <p class="actions">
          <a href="">GitHub</a>
          <router-link to="/doc/introduce">开始</router-link>
        </p>
      </div>
    </div>
    <div class="featrues">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>TypeScript开发</h3>
          <p>采用了TypeScript开发（非严格模式）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于Vue3实现</h3>
          <p>使用了Vue3 compositions组合式API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-lamp"></use>
          </svg>
          <h3>通俗易懂</h3>
          <p>组件模块化，代码简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
@use "sass:list";
@use "sass:math";
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(225, 184, 243, 1) 0%,
    rgba(161, 145, 240, 1) 100%
  );
  clip-path: ellipse(70% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #4a8af1;
  > .actions {
    padding: 8px 0;
    > a {
      margin: 0 8px;
      background-color: #9a5dbf;
      display: inline-block;
      padding: 8px;
      border-radius: 4px;
      color: white;
    }
  }
}
.featrues {
  margin: 64px auto;
  width:400px;
  @media (min-width:800px){
    width: 800px;
  }
  @media (min-width: 1200px){
    width: 1200px;
  }
  > ul {
    display:flex;
    flex-wrap:wrap;

    > li {
      width: 400px;
      margin: 16px auto;
      display:grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: 
      'icon title'
      'icon text';
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3{
        grid-area: title;
        font-size: 28px;
      }
      > p{
        grid-area: text;
      }
    }
  }
}
</style>