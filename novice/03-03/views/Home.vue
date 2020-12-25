<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LifeCycle life="life-cycle"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LifeCycle from '@/components/LifeCycle.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    LifeCycle
  }
}
</script>