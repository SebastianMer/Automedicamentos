<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/registro">Registro</router-link> |
    <router-link to="/relacion">Relación</router-link> |
    <router-link to="/medicamentos">Medicamento</router-link> |
    <router-link to="/maquina">Máquina</router-link> |
    <router-link to="/factura">Factura</router-link> |
    <router-link to="/eps">Eps</router-link> |
    <router-link to="/cd">Centro de Distribución</router-link>   
  </nav>  
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>