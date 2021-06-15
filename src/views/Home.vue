<template>
  <v-row no-gutters>
    <v-col cols="12">
      <the-navbar/>
      <div style="margin-top: -36px; background-color: white; border-radius: 50%;width: 100px; height: 100px">
        <v-icon>
          mdi-plus
        </v-icon>
      </div>
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
  }
}
</script>
