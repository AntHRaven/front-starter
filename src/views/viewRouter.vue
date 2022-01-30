<template>
  <div>
    <container-component>
      <router-view></router-view>
    </container-component>
  </div>
</template>

<script>
import ContainerComponent from "../components/general/containerComponent";
export default {
  name: "viewRouter",
  components: { ContainerComponent },
};
</script>
