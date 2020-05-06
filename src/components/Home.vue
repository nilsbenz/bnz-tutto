<template>
  <div>
    <h1>Tutto</h1>
    <p v-for="player in players" :key="player.name">{{ player.name }}</p>
    <input v-model="newPlayer" />
    <button v-on:click="addPlayer(newPlayer)">
      Add Player
    </button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 6rem;
}
</style>

<script lang="ts">
import store from '../store/store';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  computed: {
    players() {
      return store.state.players;
    },
  },
  data() {
    return {
      newPlayer: '',
    };
  },
  methods: {
    addPlayer(newPlayer: string) {
      store.commit('addPlayer', newPlayer);
      this.newPlayer = '';
    },
  },
});
</script>
