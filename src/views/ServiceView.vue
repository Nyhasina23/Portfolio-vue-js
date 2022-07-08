<template>
  <div class="serviceView">
      <div class="service-header">
          <h1>Services</h1>
          <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur
          </p>
      </div>
      <div class="service-card-container">
            <div class="service-card">
                <img src="" alt="">
                <h1>UX Research</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="service-card">
                <img src="" alt="">
                <h1>Web Development</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="service-card">
                <img src="" alt="">
                <h1>App Design</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="service-card">
                <img src="" alt="">
                <h1>Web Design</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name : "ServiceView"
}
</script>

<style scoped>
.service-card-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.service-card{
    margin:1rem;
    padding:5rem;
    border-radius: 10px;
background: rgb(2,0,36);
background: linear-gradient(189deg, rgba(2,0,36,0) 0%, rgba(102, 102, 102, 0.757) 100%, rgb(254, 236, 70) 100%, rgba(139,51,254,0.3) 0%);
}
.service-card h1 {
    color:var(--color-primary-3);
    font-weight: 600;
    margin-bottom: 1rem;;
}
.service-card p{
    color:var(--color-primary-3)
}
.serviceView{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-2);
}
.serviceView .service-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.service-header h1{
    margin-top : 4rem;
    color : var(--color-primary-3);
    margin-bottom : 2rem;
    border-bottom: 5px solid var(--color-primary);
}
.service-header p{
    color : var(--color-primary-4);
    width: 70%;
    text-align: center;
    margin-bottom : 4rem;
}

</style>