<template>
  <div class="AboutMe">
      <div class="left">
          <h1>About Me</h1>
      </div>
      <div class="right">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> <br>

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
        </p>
        <div class="button">
            <a href="#" class="button-1">View Works</a>
            <a href="#" class="button-2">Download CV</a>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    name : 'AboutView'
}
</script>

<style scoped>
.left{
    margin-right: 5rem;
}
.left h1 {
    color : var(--color-primary-3);
    font-size: 2.5rem;
    border-bottom: 5px solid var(--color-primary);
}
.AboutMe{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-5);
}
.AboutMe .right{
    width:50%;
    margin : 5rem 0rem 5rem 0rem;
    display: flex;
    flex-direction: column;
}
.right p {
    color : var(--color-primary-4);
    margin-bottom : 4rem;
}
.button-1 {
    text-decoration: none;
    color: var(--color-primary-3);
    padding: 1rem 4rem 1rem 4rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    border: 3px solid var(--color-primary);

    font-weight: normal;
    margin-right: 5%;
}
.button-2{
    text-decoration: none;
    color: var(--color-primary-3);
    padding: 1rem 4rem 1rem 4rem;
    border-radius: 5px;
    border: 3px solid var(--color-primary);
    font-weight: normal;
}
</style>