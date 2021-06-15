<template>
  <v-row no-gutters>
    <v-col cols="12">
      <the-navbar/>
      <v-row no-gutters class="justify-space-between">
        <v-spacer></v-spacer>
        <v-col v-for="(item, index) in array" :key="index" cols="1">
          <div class="category">
            <div class="inside">
              Ikna
            </div>
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
    array: [1, 2, 3, 4]
  }),
}
</script>
<style lang="scss" scoped>
.category {
  z-index: 999;
  margin-top: -36px;
  background-color: white;
  border-radius: 50%;
  width: 64px;
  height: 64px;
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
