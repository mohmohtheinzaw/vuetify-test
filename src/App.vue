<template>
  <!-- Start of Vuetify application -->
  <v-app>
    <router-view class="full-height"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.full-heght: {
  height: "100%" !important
}
</style>