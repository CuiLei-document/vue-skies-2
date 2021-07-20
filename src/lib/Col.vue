<template>
  <div
    class="col"
    :class="classes"
    :style="colStyle"
  >
      <slot></slot>
  </div>
</template>
<script lang="ts">
import { inject, computed } from "vue";
export default {
  props: {
    span: {
      type: [String || Number],
    },
    offset: {
      type: [String || Number],
    },
  },
  setup(props) {
    const gutter = inject<any>("gutters");
    const colStyle = computed(() => {
      return {
        paddingLeft: gutter.value / 2 + "px",
        paddingRight: gutter.value / 2 + "px",
      };
    });
    const classes = {
        [`col-${props.span}`]: props.span,
        [`offset-${props.offset}`]: props.offset
    }
    return {
      gutter,
      colStyle,
      classes
    };
  },
};
</script>
<style lang="scss">

// .col {
//   width: 50%;
//     height: 100px;
//     // background: blue;
//     // border: 1px solid red;
//   $class-prefix: col-;
//   @for $n from 1 through 24 {
//     &.#{$class-prefix}#{$n} {
//       width: math.div($n, 24) * 100%;
//     }
//   }
//   $class-prefix: offset-;
//   @for $n from 1 through 24 {
//     &.#{$class-prefix}#{$n} {
//       margin-left: math.div($n, 24) * 100%;
//     }
//   }
// }
</style>