<template>
  <v-row no-gutters>
    <v-col cols="12">
      <the-navbar @showInfo="showInfoDialog"/>
      <v-row no-gutters justify="space-between">
        <v-spacer></v-spacer>
        <v-col v-for="item in computedCategories" :key="item.name" cols="auto">
          <div class="category" :style="{'background-color': item['background-color']}">
            <v-btn fab :color="item.color" @click="changeActive(item.name)" elevation="0">
              <v-img :src="item.icon" max-height="70" max-width="70">
              </v-img>
            </v-btn>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row no-gutters justify="center" class="pt-10">
        <v-col cols="6">
          <v-text-field rounded outlined prepend-inner-icon="mdi-magnify" placeholder="Szukaj" dense
                        class="mx-4"></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn icon outlined style="height: 40px;width: 40px">
            <v-icon>
              mdi-map-marker
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <router-view name="place" @cardClosed="closeCard"/>
        </v-col>
      </v-row>

      <v-row no-gutters justify="center" class="pt-4">
        <v-col cols="8">
          <div class="cardContainer">
            <v-card class="placeCard" v-for="card in cards" :key="card.id" @click="pickCard(card)">
              {{ card.name }}
            </v-card>
          </div>
        </v-col>
      </v-row>
      <info-dialog v-if="isDialogLoaded" :is-visible.sync="isDialogVisible"></info-dialog>
    </v-col>
  </v-row>
</template>

<script>
import {get, call} from "vuex-pathify";

import TheNavbar from "@/components/TheNavbar";
import InfoDialog from "@/components/InfoDialog";

export default {
  name: 'Home',
  components: {
    InfoDialog,
    TheNavbar
  },
  data: () => ({
    isDialogVisible: false,
    isDialogLoaded: false,
    categories: [
      {isActive: false, name: 'activity'},
      {isActive: false, name: 'food'},
      {isActive: false, name: 'nature'},
      {isActive: false, name: 'family'},
      {isActive: false, name: 'creator'},
      {isActive: false, name: 'trip'},
      {isActive: false, name: 'monument'}
    ],
    pickedCard: undefined,
    isCardPicked: false,
    cards: [
      {name: 'fajne miejsce', id: 1},
      {name: 'fajne miejsce 2', id: 2},
      {name: 'fajne miejsce 3',id: 3},
      {name: 'fajne miejsce 4', id: 4},
      {name: 'fajne miejsce 5', id: 5},
      {name: 'fajne miejsce 6', id: 6},
      {name: 'fajne miejsce 7', id: 7},
      {name: 'fajne miejsce 8', id: 8},
      {name: 'fajne miejsce 2', id: 2},
      {name: 'fajne miejsce 9', id: 9},
      {name: 'fajne miejsce 10', id: 10}
    ],
  }),
  computed: {
    cat: get('simple/categories'),
    computedCategories() {
      return this.categories.map(item => {
        return {
          ...item,
          icon: this.getIcon({name: item.name, active: item.isActive}),
        }
      })
    }
  },
  methods: {
    getCategories: call('simple/getCategories'),
    showInfoDialog() {
      console.log('test');
      this.isDialogLoaded = true;
      this.isDialogVisible = true;
    },
    closeCard() {
      this.$router.push({
        name: 'Home',
      });
    },
    pickCard(card) {
      this.isCardPicked = !this.isCardPicked;
      this.$router.push({
        name: 'placeInfo',
        params: {
          place_id: card.id,
          place: card
        },
      });
      console.log(card);
    },
    changeActive(name) {
      const it = this.categories.find(item => item.name === name);
      it.isActive = !it.isActive;
    },
    getIcon({name, active}) {
      return active ? require(`@/assets/images/${name}_OFF.png`) : require(`@/assets/images/${name}_ON.png`);
    },
    async init() {
      await this.getCategories();
    },

  },
  mounted() {
    this.init();
    console.log(this.cat);
  }
}
</script>
<style lang="scss">
.category {
  z-index: 999;
  border-radius: 50%;
  margin: -36px 0 0 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inside {
  background-color: red;
  border-radius: 50%;
  width: 54px;
  height: 54px
}

.cardContainer {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 2rem;
}

.placeCard {
  height: 150px;
  width: 150px;
  flex:  1 0 auto;
  min-width: 20%;
}
</style>
