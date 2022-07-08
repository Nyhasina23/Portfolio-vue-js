<template>
  <div class="static  blur-sm flex flex-col items-center justify-center">
    <lottie-animation
      id="lottie"
      :animationData="require('@/assets/63487-programming-computer.json')"
      :loop="true"
      @loopComplete="loopComplete"
      @complete="complete"
      @enterFrame="enterFrame"
      @segmentStart="segmentStart"
      @stopped="stopped"
      :speed="1"/>
  </div>
</template>
<script>
export default {
  name: "ArrowLottie",
};
</script>
<style scoped>
#container {
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
}
#lottie {
  height: 100%;
  opacity:1;
  
}
</style>
