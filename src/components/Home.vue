<template>
  <div>
    <h1>Tutto</h1>
    <p v-for="player in players" :key="player">{{ player }}</p>
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

<script>
import store from '@/store/store';

export default {
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
    addPlayer(newPlayer) {
      store.commit('addPlayer', newPlayer);
      this.newPlayer = '';
    },
  },
};
</script>
