<template>
  <div class="serviceView">
      <div class="service-header">
          <h1>Services</h1>
          <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur
          </p>
      </div>
      <div class="service-card-container">
        <div class="blog_post">
            <div class="img_pod">
                <img src="../assets/pngkey.com-ui-png-4062982.png" alt="random image">
            </div>
             <div class="container_copy">
                <h1>UX Research</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            <!-- <a class="btn_primary" href='#' target="_blank">Read More</a> -->
            </div>
        </div>
        <div class="blog_post">
            <div class="img_pod">
                <img src="../assets/kindpng_5574265.png" alt="random image">
            </div>
             <div class="container_copy">
                <h1>Web Development</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            <!-- <a class="btn_primary" href='#' target="_blank">Read More</a> -->
            </div>
        </div>
        <div class="blog_post">
            <div class="img_pod">
                <img src="../assets/pngkey.com-ui-png-4062982.png" alt="random image">
            </div>
             <div class="container_copy">
                <h1>App Design</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            <!-- <a class="btn_primary" href='#' target="_blank">Read More</a> -->
            </div>
        </div>
        <div class="blog_post">
            <div class="img_pod">
                <img src="../assets/kindpng_5574265.png" alt="random image">
            </div>
             <div class="container_copy">
                <h1>Web Design</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            <!-- <a class="btn_primary" href='#' target="_blank">Read More</a> -->
            </div>
        </div>
  
            <!-- <div class="service-card one">
                <div class="center-image">
                    <img src="../assets/pngkey.com-ui-png-4062982.png" alt="">
                </div>
                <h1>UX Research</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate <br> velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="service-card two">
                <img src="../assets/kindpng_5574265.png" alt="">
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
            </div> -->
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
    background-size:cover;
    background-repeat: no-repeat;
    /* background-image: linear-gradient(to bottom right  , #2B2C2C, #4d4d4d52); */
}
.one{
    background-image:  linear-gradient(to bottom right, rgba(7, 7, 7, 0.884), rgba(121, 121, 121, 0.623)),
    url('../assets/pngkey.com-ui-png-4062982.png');
}
.service-card h1 {
    color:var(--color-primary-3);
    font-weight: 600;
    margin-bottom: 1rem;
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
.service-card img{
    width : 12rem;
    margin-bottom: 1rem;
}
.center-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.blog_post {
  background: #303131;
  max-width : 30rem;
  max-height: fit-content;
  border-radius: 10px;
  /* box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3); */
  position: relative;
  margin : 1rem;
}


.container_copy {
  padding: 7rem 4rem 3rem 4rem;
}

.img_pod {
  height: 110px;
  width: 110px;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  z-index: 10;
  /* box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3); */
  border-radius: 100%;
  position: absolute;
  left: 38%;
  top: -13%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 8.3rem;
  width: 8.3rem;
  object-fit: cover;
  position: relative;
  border-radius: 100%;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #fff;
}

h1 {
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
  color: #fff;
}

p {
  color: rgb(199, 196, 196);
}

.btn_primary {
  border: none;
  outline: none;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  padding: 1.5rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  box-shadow: 1px 10px 2rem rgba(255, 94, 98, 0.5);
  transition: all 0.2s ease-in;
  text-decoration: none;
}

.btn_primary:hover {
  box-shadow: 0px 5px 1rem rgba(255, 94, 98, 0.5);
}
</style>