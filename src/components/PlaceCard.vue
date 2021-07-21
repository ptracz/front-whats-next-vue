<template>
  <v-row no-gutters class="test">
    <v-col cols="7">
      {{ place.id }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    place: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.test {
  background:red;
}
</style>