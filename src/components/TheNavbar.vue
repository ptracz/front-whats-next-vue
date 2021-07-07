<template>
  <v-row no-gutters class="bar">
    <v-col cols="auto" class="augustFont">
      What's Next<span style="color: #ffcc00">?</span>
    </v-col>
    <v-spacer/>
    <v-col cols="auto">
      <v-btn fab icon outlined small style="color: #ffcc00">
        <div class="infoButton">
          <small>i</small>
        </div>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

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

.infoButton {
  font-family: 'Pacifico', cursive;
  text-transform: lowercase;
  color: white;
  font-weight: 500;
  font-size: 2em;
}

</style>