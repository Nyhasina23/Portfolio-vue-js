<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap');
:root {
    --font : 'Poppins' 
    --main-white: #fff;
    --main-black:#000;
    --color-primary : #ff9966;
    --color-primary-2:#2B2C2C;
    --color-primary-5:#303131;
    --color-primary-3:#FFFFFF;
    --color-primary-4:#C2C9CC;
    --secondary-color-1:#161b4f;
    --secondary-color-2:#8c8eab;
    --secondary-color-3:#a0a0a0; 
    --primary-color-1:#fbb03b;
    --primary-color-2:#448bca;
    --primary-color-3:#c1272d;
    --primary-gradient-1:linear-gradient(141.18deg, #0D1351 14.65%, #02030F 82.43%);
}
body {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
* {
  font-family: "Poppins", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
