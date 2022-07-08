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

      <div class="service-header">
          <h1>Projects</h1>
          <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur
          </p>
      </div>
        <div class="cards">
        <div class="card content">
            <div class="card-content">
            <div class="card-img">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer">
            </div>
            <div class="card-label">E-Sports</div>
            <div class="card-title">
                Fnatic raises $19 million, shakes up leadership team
            </div>
            </div>
        </div>
        <div class="card content">
            <div class="card-content">
            <div class="card-img">
                <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard">
            </div>
            <div class="card-label">
                Technology
            </div>
            <div class="card-title">
                Google Stadia: The Future of Gaming
            </div>
            </div>
        </div>
        <div class="card content">
            <div class="card-content">
            <div class="card-img">
                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller">
            </div>
            <div class="card-label">
                Consoles
            </div>
            <div class="card-title">
                PS5 won't launch before mid-2020
            </div>
            </div>
        </div>
        <div class="card form">
            <div class="form-title">CV</div>
        </div>
            <a class="btn_primary" href='#' target="_blank">Read More</a>


    </div>

        <div class="service-header">
          <h1>Contacts</h1>
          <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur
          </p>
      </div>
         
  </div>
  </div>
</template>

<script>
export default {
    name : "ServiceView"
}
</script>

<style lang="scss" scoped>
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

.img_pod img {
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
  color: white;
  font-size: 1.2rem;
  box-shadow: 1px 10px 2rem rgba(255, 94, 98, 0.5);
  transition: all 0.2s ease-in;
  text-decoration: none;
}

.btn_primary:hover {
  box-shadow: 0px 5px 1rem rgba(255, 94, 98, 0.5);
}

.cards {
  width: calc(100% - 2em);
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    grid-template-areas:
      "a a b c"
      "a a d d";
    width: 75%;
}

.card {
  width: 100%;
  position: relative;
  transition: all 0.25s ease;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    height: 0;
    content: "";
    display: block;
    padding-bottom: 47.36%;
  }
  &.content {
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      content: "";
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
    }
  }
  &:nth-child(1) {
    grid-area: a;
  }
  &:nth-child(2) {
    grid-area: b;
  }
  &:nth-child(3) {
    grid-area: c;
  }
  &:nth-child(4) {
    grid-area: d;
  }
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-label {
    position: absolute;
    top: .45rem;
    left: .45rem;
    background: #089f8a;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.7em;
    color: white;
    padding: 0.5em;
  }
  &-title {
    position: absolute;
    left: 1em;
    bottom: 1em;
    color: #d6dbeb;
    z-index: 5;
    font-size: 0.8em;
  }
  &.form {
    position: relative;
    &:before {
      background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
    }
    &:after {
      position: absolute;
      top: .5em;
      left: .5em;
      width: calc(100% - 1em);
      height: calc(100% - 1em);
      content: "";
      background: #252833;
    }
    .form-title {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 7vw;
      font-weight: 900;
      z-index: 5;
      text-transform: uppercase;
      background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        content: "CV";
        opacity: 0.5;
        filter: blur(10px);
        transition: all .25s ease;
        z-index: 2;
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
  &:nth-child(2) {
    .card-label {
      background: #ef4e7b;
    }
  }
  &:nth-child(3) {
    .card-label {
      background: #1098ad;
    }
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
    .form-title {
      &:before {
        filter: blur(3px);
        opacity: 0.7;
      }
    }
  }
}

</style>