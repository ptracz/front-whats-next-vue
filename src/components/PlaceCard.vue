<template>
  <div class="test">
    <template v-if="place">
        <v-card color="rgba(0,0,0,0)" class="rounded-xl bigCard" width="300" height="300">
          ZDJĘCIE
        </v-card>

        <v-card color="rgba(0,0,0,0)" width="300" height="300" class="rounded-xl bigCard">
          <v-row no-gutters>
            <v-col>
              Ikony kategorii
            </v-col>
            <v-spacer />
            <v-col>
              <v-btn fab color="black" width="15" height="15" @click="copyURL">
                <v-icon color="blue" size="14">
                  mdi-share-variant
                </v-icon>
              </v-btn>
              <v-btn fab color="red" width="28" height="28" @click="closeCard">
                <v-icon color="white" size="26">
                  mdi-close
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div class="placeInfo">
                {{place.name}}
              </div>
            </v-col>
          </v-row>
        </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    place: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    closeCard() {
      this.$emit('cardClosed');
    },
    copyURL() {
      const Url = window.location.href;
      console.log(Url);
      navigator.clipboard.writeText(Url);
    }
  },

}
</script>

<style scoped lang="scss">
.test {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex: 0 1 50%;
  gap: 2rem;
}
.bigCard {
  flex: 0 1 38%;
}
.placeInfo {
  padding: 30px 20px;
  font-size: x-large;
}
</style>
