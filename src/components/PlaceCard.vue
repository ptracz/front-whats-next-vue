<template>
  <div class="test">
    <div>
      <v-card color="rgba(0,0,0,0)" class="rounded-xl" width="300" height="300">
        ZDJĘCIE
      </v-card>

    </div>
    <div>
      <v-card color="rgba(0,0,0,0)" width="300" height="300">
        <v-row no-gutters>
          <v-col>
            2 ikony
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn fab color="black" width="15" height="15" @click="copyURL">
              <v-icon color="blue" size="14">
                mdi-share-variant
              </v-icon>
            </v-btn>
            <v-btn fab color="black" width="15" height="15" @click="closeCard">
              <v-icon color="blue" size="14">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    place: {
      type: Object,
      required: true,
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
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.placeInfo {
  padding: 30px 20px;
  font-size: x-large;
}
</style>