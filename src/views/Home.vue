<template>
  <v-row no-gutters>
    <v-col cols="12">
      <the-navbar/>
      <v-row no-gutters class="justify-space-between">
        <v-spacer></v-spacer>
        <v-col v-for="(item, index) in array" :key="index" cols="auto">
          <div class="category" :style="{'background-color': item['background-color']}">
            <v-btn fab :color="item.color" @click="changeColor(item)"></v-btn>
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
        <v-col cols="8">
          <v-row no-gutters>
            <v-col cols="3" v-for="card in cards" :key="card" style="padding: 4px">
              <v-card height="100px" width="100px"> asda</v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import TheNavbar from "@/components/TheNavbar";

export default {
  name: 'Home',
  components: {
    TheNavbar
  },
  data: () => ({
    array: [
      {color: 'hsl(0,100%,15%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,25%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,35%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,50%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,65%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,75%)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'hsl(0,100%,85%)', activeColor: 'gray', isActive: false, 'background-color': 'white'}
    ],
    cards: [1, 2, 3, 4, 7, 1, 43, 4, 1, 234, 12334],
  }),
  methods: {
    changeColor(item) {
      if (item.isActive) {
        item.color = item.colorCopy;
        item['background-color'] = 'white'
        item.isActive = !item.isActive;
        return;
      }
      item.colorCopy = item.color;
      item['background-color'] = '#4d4d4d'
      item.color = item.activeColor;
      item.isActive = !item.isActive;

    }
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
