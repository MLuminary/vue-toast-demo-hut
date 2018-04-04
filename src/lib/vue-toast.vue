<template>
  <section class="toast-container">
    <div class="toast" v-bind:class="visible?'fade-in':'fade-out'">
      <span>{{message}}</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .toast-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    .toast {
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      color: #fff;
      transition: .5s;
    }
    .fade-in{
      opacity: 1;
      transform: scale(1);
    }
    .fade-out{
      opacity: 0;
      transform: scale(0.7);
    }
  }
</style>

<script>
  export default{
    data () {
      return{
        visible:false,
        message:''
      }
    }
  }
</script>

