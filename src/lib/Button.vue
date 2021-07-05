<template>
    <button v-bind="rest">
      <slot />
    </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
  div{
    border: 1px solid red;
  }
</style>