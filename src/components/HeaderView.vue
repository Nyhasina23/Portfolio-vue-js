<template>
  <div class="headerView">
      <div class="header-container">
            <NavBar class="" />
            <div class="header-content">
                <div class="left">
                    <h1>I'm Ny Hasina</h1>
                    <h3 >Freelance Web & Mobile UI/UX <br> Designer</h3>
                    <a href="#" class="button-primary">Hire Me</a>
                </div>
                <div class="right">
                    <Portfolio />
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Portfolio from '@/components/lotties/PortfolioVue'
import NavBar from '@/components/NavBar.vue'
export default {
    name : 'HeaderView' , 
    components : {
          NavBar,
          Portfolio,
    }
}
</script>

<style scoped>
.header-content .left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
}
.right{
    width: 100rem;
    display: flex;
    align-items: end;
    justify-content: end;
}
.header-container{
    width: 90%;
}
.headerView{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary-2);
}
.w-90{
    width: 90%;
}
.headerView .header-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-content h1 {
    color: var(--color-primary-3);
    font-size : 3rem;
    font-weight: 600;
}
.header-content h3 {
    font-weight: normal;
    color: var(--color-primary-4);
    margin-bottom : 5%;
}
.header-content a {
    text-decoration: none;
    color: var(--color-primary-3);
    padding: 1rem 4rem 1rem 4rem;
    border-radius: 5px;
    background: linear-gradient(90deg, #ff9966, #ff5e62);
    font-weight: bold;
    letter-spacing: 0.1rem;
}


</style>