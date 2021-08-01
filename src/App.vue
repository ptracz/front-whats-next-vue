<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background: #4d4d4d;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-thumb {
  background: #ffcc00;
  border: 0 none #4d4d4d;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffcc00;
}
::-webkit-scrollbar-thumb:active {
  background: #ffcc00;
}
::-webkit-scrollbar-track {
  background: #4d4d4d;
  border: 0 none #ffffff;
  border-radius: 3px;
}
::-webkit-scrollbar-track:hover {
  background: #4d4d4d;
}
::-webkit-scrollbar-track:active {
  background: #4d4d4d;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
