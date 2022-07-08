<template>
  <div class="navBar">
      <div class="logo">
          <h1>H.</h1>
      </div>
      <div class="navbar-list">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
.navBar .logo{
    display: flex;
    align-items: flex-start;
    width:100%;
}
.navBar .logo h1 {
    color : var(--color-primary);
    font-size : 3rem;
}
.navBar{
    width:100%;
    display: flex;
    align-items: center;
}
.navbar-list{
    display: flex;
    align-items: flex-end;
}
.navBar ul {
    display: flex;
}
.navbar-list ul li{
   list-style-type: none;
}
.navbar-list ul li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin : 2rem;
    font-weight: 500;
    color : var(--color-primary-4)
}
</style>