<template>
  <div class="wrapper">
    <input
      :class="{ error: error }"
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('update:value',$event.target.value)"  
    />
    <template v-if="error">
      <svg class="icon">
        <use xlink:href="#icon-error"></use>
      </svg>
      <span class="errorMage">{{error}}</span>
    </template>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    lastName:{
      type:String
    }
  },
  setup(props,context){
     
  }
};
</script>
<style lang="scss" scoped>
$h: 32px;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  margin: 8px;
  align-items: center;
  > input {
    height: $h;
    border-radius: $border-radius;
    padding: 0 8px;
    border: 1px solid $border-color;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: rgb(248, 100, 100);
      color: rgb(153, 51, 51);
      cursor: not-allowed;
    }
  }
  > svg{
      width: 1.5em;
      height: 1.5em;
      margin: 0 6px;
  }
  > .errorMage{}
}
</style>