<template>
  <div id="app">
    <nav>
      <router-link to="/">Home </router-link>
      <router-link v-for="item in routeList" :key="item.path" :to="item.path">{{
        item.meta && item.meta.title
      }}</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      routeList: [],
    };
  },
  created() {
    this.routeList = this.$router.options.routes;
    console.log(this.routeList);
  },
};
</script>

<style lang="scss">
#app {
  background-color:  #FBECF2;
  min-height: 100%;
  nav {
    padding: 5px 50px;
    background-color: #000;
    color: #fff;
    position: fixed;
    
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    a {
      margin-left: 10px;
      color: inherit;
    }
  }
}
</style>
