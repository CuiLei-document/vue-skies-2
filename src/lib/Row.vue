<template>
  <div class="row" :style="rowStyle" :class="rowClass" >
    <slot />
  </div>
</template>
<script lang="ts">
import { provide, ref } from "vue";
export default {
  props: {
    gutter: {
      type: [String || Number],
    },
    align:{
        type:String,
    }
  },
  setup(props, context) {
    const gutters = ref(props.gutter);
    provide("gutters", gutters);
    const rowStyle = {
      marginRight: -props.gutter / 2 + "px",
      marginLeft: -props.gutter / 2 + "px",
    };
    const rowClass = {
        [`align-${props.align}`] : props.align
    }
    return {
        rowStyle,
        rowClass
    }
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left{
      justify-content: flex-start;
  }
  &.align-right{
      justify-content: flex-end;
  }
  &.align-center{
      justify-content:center;
  }
}
</style>