<template>
  <v-row no-gutters  class="bar">
    <v-col cols="auto" class="augustFont">
      What's Next<span style="color: #ffcc00">?</span>
    </v-col>
    <v-col>
      navbar
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "August";
  src: url(../fonts/august.ttf) format("truetype"),
  url(../fonts/august.otf) format("opentype");
}
.bar {
  background: #4d4d4d;
  padding: 2rem 5rem;
}
.augustFont {
  font-family: "August", Helvetica, Arial;
  font-size: 2.5rem;
  color: white;
  font-weight: 500;
  line-height: 1.2;
}

</style>