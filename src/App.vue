<template>
  <div id="app" style="min-height: inherit">
    <nav-menu>
      <router-view> </router-view>
    </nav-menu>
    <modal-generic></modal-generic>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import NavMenu from "@/components/navMenu/navMenu";
import ModalGeneric from "@/components/general/modalGeneric";
export default {
  components: { ModalGeneric, NavMenu },
};
</script>
