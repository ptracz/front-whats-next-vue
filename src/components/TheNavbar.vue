<template>
  <v-row no-gutters class="bar">
    <v-col cols="auto" class="augustFont" @click="goToMain" style="cursor: pointer">
      What's Next<span style="color: #ffcc00">?</span>
    </v-col>
    <v-spacer/>
    <v-col cols="auto">
      <v-btn fab icon small @click="showInfo">
        <v-img :src="infoImage" max-height="30" max-width="30">
        </v-img>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheNavbar",
  data: () => ({
    infoImage: require('@/assets/images/contact.png')
  }),
  methods: {
    showInfo() {
      this.$emit('showInfo');
    },
    goToMain() {
      this.$router.push('/')
    }
  },
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