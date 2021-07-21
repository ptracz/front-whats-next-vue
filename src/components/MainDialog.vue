<template>
  <v-dialog
      content-class="main-dialog"
      v-model="computedIsVisible"
      max-width="24%"
      :persistent="persistent"
      @click:outside.prevent="handleClickOutside"
      :scrollable="false"
      @keydown.enter="onEnterClicked"
  >
    <v-card>
        <slot name="body">
          <div style="height: 300px">body</div>
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
    titleText: {
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

<style scoped>

</style>