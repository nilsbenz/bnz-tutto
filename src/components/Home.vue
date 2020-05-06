<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Tutto</v-toolbar-title>
    </v-toolbar>
    <div class="container">
      <v-text-field
        :error-messages="addPlayerError"
        label="Spieler hinzufügen"
        v-model="newPlayer"
        outlined
        type="text"
      >
        <template v-slot:append>
          <v-btn icon v-on:click="addPlayer(newPlayer)" style="top: -6px">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-list v-for="player in players" :key="player.name" dense>
        <v-list-item>
          <v-list-item-content>{{ player.name }}</v-list-item-content>
          <v-list-item-action class="list-item-action">
            <v-btn icon>
              <v-icon v-on:click="deletePlayer(player.name)">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-btn
        color="primary"
        v-on:click="startGame()"
        class="start-game-button"
        v-if="players.length >= 2"
      >
        Spiel starten
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 24px 12px 12px;
}
.list-item-action {
  margin: 0 0 0 8px;
}
.start-game-button {
  margin-top: 16px;
  width: 100%;
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
    addPlayerError() {
      return store.state.messages.addPlayerError;
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
    deletePlayer(name: string) {
      store.commit('deletePlayer', name);
    },
    startGame() {
      store.commit('startGame');
    },
  },
});
</script>
