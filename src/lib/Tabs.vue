<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        :class="{ selected: t === selected }"
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" 
      v-for="(c,index) in defaults" :key="index" :is="c" :class="{selected:c.props.title === selected}"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    console.log(defaults)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("我操了给dj");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      select,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      display:none;
      &.selected{
        display:block;
      }
    }
  }
}
</style>