<template>
  <main>
    <v-app>
      <router-view />
    </v-app>
  </main>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding: 0;
}

li {
  padding: 5px 15px 5px 0;
}

li a {
  text-decoration: none;
  color: black;
}

li a:hover {
  color: #404040;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
