<template>
  <v-dialog
      content-class="main-dialog"
      v-model="computedIsVisible"
      max-width="40%"
      :persistent="persistent"
      @click:outside.prevent="handleClickOutside"
      :scrollable="false"
      @keydown.enter="onEnterClicked"
  >
    <v-card :style=" isGray? 'background-color: rgba(77,77,77,0.9)' : ''" rounded>
      <v-card-title
          class="font-weight-regular"
      >
        <slot name="title">
            <span :class="titleClass">{{ titleText }}</span>
            <v-spacer></v-spacer>
          <div class="behindButton">
            <v-btn icon @click="onClose" small>
              <v-icon color="error">mdi-close-circle</v-icon>
            </v-btn>
          </div>


        </slot>
      </v-card-title>
        <slot name="body">
          <div style="height: 50vh">body</div>
        </slot>
    </v-card>

  </v-dialog>

</template>

<script>
export default {
  name: "MainDialog",
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    isGray: {
      type: Boolean,
      default: false,
    },
    titleText: {
      type:  String,
      default: '',
    },
    titleClass: {
      type:  String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    persistent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computedIsVisible: {
      get() {
        return this.isVisible;
      },
      set(nV) {
        this.$emit('update:isVisible', nV);
      },
    },
  },
  methods: {
    handleClickOutside() {
      return this.persistent ? null : (this.computedIsVisible = false);
    },
    onEnterClicked() {
      if (this.isValid) {
        this.$emit('agree');
      }
    },
    onClose() {
      this.$emit('modalClosed');
      this.computedIsVisible = false;
    },
  }
}
</script>

<style scoped lang="scss">
.behindButton {
  background: white;
  max-height: 16px;
  max-width: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>