<template>
  <v-row justify="center" v-if="open">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h4 class="flex-grow">{{ player && player.name }}</h4>
          <h4>
            {{
              player && player.score.length > 0
                ? player.score.reduce((acc, current) => acc + current)
                : ''
            }}
          </h4>
        </v-card-title>
        <v-card-text class="pt-4">
          <v-list
            dense
            v-if="player.score.length > 0"
            class="overflow-y-auto mb-6 score"
          >
            <v-list-item v-for="(value, index) in player.score" :key="index">
              <p class="ma-0">
                {{ value }}
              </p>
            </v-list-item>
          </v-list>
          <v-text-field
            type="number"
            v-model="amount"
            label="Punkte"
            :error-messages="writePointsError"
            outlined
            dense
            autofocus
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="close()">
            Schliessen
          </v-btn>
          <v-btn color="primary" @click="writePoints()">
            Speichern
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.score {
  max-height: 40vh;
}
</style>

<script lang="ts">
import store from '../store/store';
import Vue from 'vue';

export default Vue.extend({
  name: 'Points',
  props: ['player', 'open', 'closeDialog'],
  data() {
    return {
      amount: '',
      writePointsError: '',
    };
  },
  methods: {
    close() {
      this.amount = '';
      this.writePointsError = '';
      this.closeDialog();
    },
    writePoints() {
      if (/^-?[0-9]{2,}$/g.test(this.amount)) {
        store.commit('addToScore', {
          player: this.player.name,
          amount: this.amount,
        });
        this.amount = '';
        this.writePointsError = '';
        this.closeDialog();
      } else {
        this.writePointsError = 'Gib eine zweistellige Zahl ein.';
      }
    },
  },
});
</script>
