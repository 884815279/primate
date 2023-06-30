<template>

<div>
  <router-view></router-view>
  <jia></jia>
<jian></jian>
</div>

</template>

<script>
import jia from '../src/components/jia.vue'
import jian from '../src/components/jian.vue'

export default {
  name: 'App',
  components: {
   
    jia,
    jian
  }
}
</script>

<style>

</style>
