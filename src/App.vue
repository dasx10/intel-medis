<template>
  <div id='a'>
      <bar/>
        <component id='a' :is='$route.meta.lay||"none"'/>
      <foo/>
  </div>
</template>
<script>
export default {
  components:{
    bar:()=>import('@/components/bar.vue'),
    none:()=>import('@/layout/none.vue'),
    foo:()=>import('@/components/foo')
  }
}
</script>
<style lang='scss'>
  a{
    cursor:pointer;
  }
  #a{
    background:fixed url('/img/bg.jpg') no-repeat;
    background-size:100% 100%;
  }#b{
    background:rgba(255,255,255,0.6);
  }
  .point{
    cursor: pointer;
  }
</style>