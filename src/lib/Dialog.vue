<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay"  @click="closeClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>标题 <span @click="close" class="gulu-dialog-close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button @click="ok">确定</Button>
          <Button @click="count">取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeClickOverlay:{
        type:Boolean,
        default:true
    },
    ok:Function,
    count:Function
  },
  setup(props,context){
      const close = ()=>{
          context.emit('update:visible',false)
      }
      const closeClickOverlay = ()=>{
          if(props.closeClickOverlay){
              close()
          }
      }
      const ok = ()=>{
          if(props.ok?.() !== false){
              close()
          }
      }
      const count = ()=>{
          close()
      }
      return{
          close,
          closeClickOverlay,
          ok,
          count
      }
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: black, $amount: 0.9);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
      padding: 12px 15px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size:30px;
  }
  >main{
      padding: 12px 16px;
  }
  >footer{
      border-top:1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
  }
 &-close{
     position: relative;
     display:inline-block;
     width:16px;
     height:16px;
     cursor: pointer;

     &::before,&::after{
         content:'';
         display:block;
         height:1px;
         position:absolute;
         width:100%;
         top:50%;
         left:50%;
         background-color:black;
     }
     &::before{
         transform: translate(-50%,-50%) rotate(-45deg);
     }
     &::after{
         transform: translate(-50%,-50%) rotate(45deg);
     }
 }
}
</style>