<template>
  <div>
    <v-toolbar dark flat color="primary">
      <v-toolbar-title>Tutto</v-toolbar-title>
    </v-toolbar>
    <v-container class="pt-12">
      <v-row dense>
        <v-col>
          <v-text-field
            :error-messages="addPlayerError"
            label="Spieler hinzufügen"
            v-model="newPlayer"
            outlined
            type="text"
            dense
            autofocus
          >
            <template v-slot:append-outer>
              <v-btn icon v-on:click="addPlayer(newPlayer)" style="top: -6px">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-list dense>
            <v-list-item v-for="player in players" :key="player.name">
              <p class="ma-0 flex-grow">
                {{ player.name }}
              </p>
              <v-btn icon>
                <v-icon v-on:click="deletePlayer(player.name)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row dense class="mt-6" v-if="players.length >= 2">
        <v-col v-if="gameRunning">
          <v-btn v-on:click="continueGame()" block outlined>
            Weiter <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            color="primary"
            v-on:click="newGame()"
            block
            v-if="players.length >= 2"
          >
            Neues Spiel <v-icon right>mdi-rocket</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-alert type="info" class="mt-6">
            Füge mindestens zwei Spieler hinzu, um ein Spiel starten zu können.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.list-item-action {
  margin: 0 0 0 8px;
}
.flex-grow {
  flex-grow: 1;
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
    gameRunning() {
      return store.state.currentCard !== null;
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
    newGame() {
      store.commit('newGame');
    },
    continueGame() {
      store.commit('continueGame');
    },
  },
});
</script>
