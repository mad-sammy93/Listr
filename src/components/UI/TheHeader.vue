<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Lists</router-link>
        <router-link to="/notes">Notes</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  /* text-align: center; */
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#app {
  min-width: 400px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    justify-content: center;
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  input[type=checkbox] {
  visibility: hidden;
}

input[type=checkbox] ~ label {
  position: relative;
}

  nav {
    text-align: left;
    margin-left: 0rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
