<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Tutto</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <transition name="slide-fade" mode="out-in">
            <v-card
              class="pa-2 my-4 card"
              v-bind:style="{
                backgroundColor: currentCard.backgroundColor,
                border: `medium solid ${currentCard.color}`,
              }"
              :key="currentCard.index"
              elevation="12"
            >
              <div class="center">
                <h3>{{ currentCard.displayName }}</h3>
              </div>
              <div class="space-between card-detail">
                <h4>{{ currentCard.price }}</h4>
                <v-icon :color="currentCard.color" x-large>
                  {{ currentCard.icon }}
                </v-icon>
                <h4>{{ currentCard.price }}</h4>
              </div>
            </v-card>
          </transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn block outlined v-on:click="nextCard()">
            Nächste Karte <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="my-2">Punkte</h2>
          <v-list dense>
            <v-list-item
              v-for="player in players"
              :key="player.name"
              @click="setWritePoints(player.name)"
            >
              <p class="ma-0 flex-grow">
                {{ player.name }}
              </p>
              <p class="ma-0">
                {{ player.score }}
              </p>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <Points
      :player="writePoints"
      :open="writePoints !== null"
      :closeDialog="() => setWritePoints(null)"
    />
  </div>
</template>

<style scoped>
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  border-radius: 4px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-detail {
  margin: 32px 0;
}
.flex-grow {
  flex-grow: 1;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(100px);
}
.slide-fade-leave-to {
  transform: translateX(-100px);
}
</style>

<script lang="ts">
import Vue from 'vue';
import store from '../store/store';
import Points from './Points.vue';
import { Player } from '../store/types';

export default Vue.extend({
  name: 'Game',
  components: {
    Points,
  },
  computed: {
    currentCard() {
      if (store.state.currentCard !== null) {
        return {
          ...store.state.cards[store.state.currentCard],
          index: store.state.currentCard,
        };
      }
      return null;
    },
    players() {
      const players = store.state.players.map((p) => ({
        ...p,
        score:
          p.score.length > 0
            ? p.score.reduce((acc, current) => acc + current)
            : 0,
      }));
      return players.sort((a, b) => b.score - a.score);
    },
  },
  data() {
    interface Data {
      writePoints: Player | null;
    }
    const data: Data = {
      writePoints: null,
    };
    return data;
  },
  methods: {
    nextCard() {
      store.commit('nextCard');
    },
    setWritePoints(player: string | null) {
      this.writePoints =
        store.state.players.find((p) => p.name === player) || null;
    },
  },
});
</script>