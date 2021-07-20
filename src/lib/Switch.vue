<template>
  <div>
    <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value }" :disabled="disabled">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
    props:{
        value:Boolean,
        disabled:Boolean
    },
    setup(props,context) {
    const toggle = () => {
      context.emit('update:value',!props.value)
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>

$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h / 2;
  position: relative;
  
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &.gulu-checked {
    background: blue;
  }
  &.gulu-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus{
      outline:none;
  }
  &:active{
      >span{
          width: $h2 + 4px;
      }
  }
  &.gulu-checked:active{
      >span{
          width:$h2  +  4px;
          margin-left: -4px;
      }
  }
}
</style>