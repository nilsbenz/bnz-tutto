<template>
  <div>
    <v-toolbar dark flat color="primary">
      <v-toolbar-title>Tutto</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="goHome()">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <transition name="slide-fade" mode="out-in">
            <v-card
              class="pa-4 my-4 card"
              v-bind:style="{
                backgroundColor: currentCard.backgroundColor,
                border: `medium solid ${currentCard.color}`,
              }"
              :key="currentCard.index"
              elevation="12"
            >
              <div class="center">
                <h1>{{ currentCard.displayName }}</h1>
              </div>
              <div class="space-between card-detail">
                <h2>{{ currentCard.price }}</h2>
                <v-icon :color="currentCard.color" x-large>
                  {{ currentCard.icon }}
                </v-icon>
                <h2>{{ currentCard.price }}</h2>
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
  margin: 48px 0;
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
import router from '../plugins/router';

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
    goHome() {
      router.push('/');
    },
  },
});
</script>
