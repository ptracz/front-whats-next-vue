<template>
  <v-row no-gutters>
    <v-col cols="12">
      <the-navbar @showInfo="showInfoDialog"/>
      <v-row no-gutters class="justify-space-between">
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
      <v-row no-gutters style="margin-top: 10px">
        <v-spacer></v-spacer>
        <v-col cols="6" style="margin-right: 20px">
          <v-text-field rounded outlined prepend-inner-icon="mdi-magnify" placeholder="Szukaj" dense
                        class="mx-4"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn icon outlined style="height: 40px;width: 40px">
            <v-icon>
              mdi-map-marker
            </v-icon>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="10">
          <router-view name="place" @cardClosed="closeCard"/>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="8">
          <v-row no-gutters>
            <v-col cols="3" v-for="card in cards" :key="card.id" style="padding: 4px">
              <v-card height="100px" width="100px" @click="pickCard(card)">
              {{card.name}}
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <main-dialog v-if="isDialogLoaded" :is-visible.sync="isDialogVisible" title-text="test" header-shadow :persistent="false"></main-dialog>
    </v-col>
  </v-row>
</template>

<script>

import TheNavbar from "@/components/TheNavbar";
import MainDialog from "@/components/MainDialog";

export default {
  name: 'Home',
  components: {
    MainDialog,
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
    cards: [{name: 'fajne miejsce', id: 1}, {name: 'fajne miejsce 2', id: 2}],
  }),
  computed: {
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
</style>
