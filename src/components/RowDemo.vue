<template>
  <div>
    <row-demo gutter="20">
      <col-demo span="9">
        <row-demo>
            <col-demo>中国大陆</col-demo>
            <col-demo>亲，请登录</col-demo>
            <col-demo>免费注册</col-demo>
            <col-demo>手机淘宝</col-demo>
        </row-demo>
      </col-demo>
      <col-demo span="15">2</col-demo>
    </row-demo>
  </div>

  <row-demo>
    <col-demo span="4">1</col-demo>
    <col-demo span="12" offset="2">2</col-demo>
    <col-demo span="6">3</col-demo>
  </row-demo>
</template>

<script lang="ts">
import RowDemo from "../lib/Row.vue";
import ColDemo from "../lib/Col.vue";
export default {
  components: { RowDemo, ColDemo },
};
</script>
<style lang="">
.wrapper {
  /* border: 1px solid red; */
}
</style>