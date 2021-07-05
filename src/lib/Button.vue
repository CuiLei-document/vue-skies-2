<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    leve: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, leve } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-leve-${leve}`]: leve,
      };
    });
    return {
      classes,
    };
  },
};
</script>

<style lang="scss" scoped>
  $h:32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #4098fc;
  $green:#36ad6a;
  $red: #de576d;
  $yellow:#fcb03f;
  $radius: 4px; 
  .gulu-button{
    box-sizing: border-box;
    height:$h;
    padding: 0 12px;
    cursor: pointer;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background-color:white;
    border: 1px solid  $border-color;
    color:$color;
    border-radius:$radius;
    box-shadow: 0 1px 0 fade-out(black,0.95);
    transition: all 250ms;
    & + & {
      margin-left: 8px;
      margin-top: 8px;
    }
    &:hover,&:focus{
      color: $blue;
      border-color:$green;
    }
    &:focus{
      outline: none;
    }
    &::-moz-focus-inner{
      border: none;
    }
    &.gulu-theme-text{
      background:$green;
      color:white;
      border-color: transparent;
      box-shadow:none;
    }
    &.gulu-theme-link{
      border-color:transparent;
      box-shadow:none;
      color:$blue;
      &:hover,&:focus{
        color: lighten($blue,10%);
      }
       &:active{
        box-shadow: 0 0 5px rgba(82, 246, 118, 0.9);
      }
    }
    &.gulu-theme-error{
      background:red;
      color: white;
      border:none;
      transition: all 150ms;
      &:active{
        box-shadow: 0 0 18px rgba(240, 48, 48, 1);
      }
    }
      &.gulu-size-big{
        height: 48px;
        font-size: 24px;
        padding: 0 16px;
        // border: 1px solid #e0e0e6;
      }
      &.gulu-size-medium{
        height: 36px;
        font-size: 18px;
        // border: 1px solid #e0e0e6;
      }
      &.gulu-size-small{
        font-size: 16px;
        height:22px;
        height: 28px;
        // border: 1px solid #e0e0e6;
      }
      &.gulu-size-tiny{
        font-size: 12px;
        height: 22px;
        padding: 2px;        
      }
      &.gulu-theme-button{
        &.gulu-leve-main{
          background:$blue;
          color: white;
          border-color:$blue;
          &:hover,&:focus{
            background:darken($blue,10%);
            border-color:darken($blue,10%)
          }
        }
        &.gulu-leve-danger{
          background:$red;
          border-color:$red;
          color:$yellow;
          &:hover,&:focus{
            background:darken($red,10%);
            border-color: darken($red,10%);
          }
        }
      }
      &.gulu-theme-link{
        &.gulu-leve-main{
          color: $blue;
          &:hover,&:focus{
            color:darken($blue,10%);
          }
        }
        &.gulu-leve-danger{
          background:none;
          color:$yellow;
          border:none;
        }
      }
      &.gulu-theme-text{
        &.gulu-leve-main{
          background:transparent;
          color: $blue;
          &:hover,&:focus{
            color:darken($blue,10%)
          }
        }
        &.gulu-leve-danger{
          background:transparent;
          color:$yellow;
        }
      }
      &.gulu-theme-button{
        &[disabled]{
          cursor:not-allowed;
          color:$yellow;
          &:hover,&:focus{
            border-color:$red;
          }
        }
      }
      &.gulu-theme-text,&.gulu-theme-line{
        &[disabled]{
          cursor: not-allowed;
          border:none;
          color:$yellow;
          cursor: not-allowed;
        }
      }
      > .gulu-loadingIndicator{
        width:14px;
        height:14px;
        display:inline-block;
        margin-right: 4px;
        border-radius:50%;
        border-color:$red $red $red transparent;
        border-style: solid;
        animation: gulu-spin 650ms infinite linear;
      }
  }
  @keyframes gulu-spin{
        0%{transform: rotate(0deg)}
        100%{
          transform: rotate(360deg)
        }
      }
</style>