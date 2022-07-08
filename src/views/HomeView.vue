<template>
  <div class="HomeView">
      <HeaderView />
      <AboutView class="about" />
      <ServiceView />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import AboutView from '@/views/AboutView.vue'
import ServiceView from '@/views/ServiceView.vue'
export default {
    name : 'HomeView' , 
    components : {HeaderView ,AboutView , ServiceView}
}
</script>

<style scoped>


</style>