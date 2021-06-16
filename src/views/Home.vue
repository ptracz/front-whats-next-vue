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
      <div> the app
      </div>
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
      {color: 'rgb(215,17,17)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'rgb(25,141,37)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'rgb(38,40,184)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'rgb(245,191,2)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'rgb(157,12,224)', activeColor: 'gray', isActive: false, 'background-color': 'white'},
      {color: 'rgb(0,255,234)', activeColor: 'gray', isActive: false, 'background-color': 'white'}
    ]
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
<style lang="scss" scoped>
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
