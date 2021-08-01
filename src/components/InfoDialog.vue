<template>
  <main-dialog :is-visible.sync="computedIsVisible" header-shadow is-gray :persistent="false" :title-text="$i18n.t('dialog.info.contactForm')" :title-class="'txt-yellow'">
    <template #body>
      <div class="pa-5">

        <v-row no-gutters align="start" justify="start">
          <v-col>
            <v-form>
              <v-text-field :placeholder="$i18n.t('dialog.info.name')" outlined dense color="#ffcc00" background-color="white"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.surname')" outlined dense color="#ffcc00" background-color="white"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.email')" outlined dense color="#ffcc00" background-color="white"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.phone')" outlined dense color="#ffcc00" background-color="white"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.messageSubject')" outlined dense color="#ffcc00" background-color="white"/>
              <v-textarea :placeholder="$i18n.t('dialog.info.enterMessage')" outlined dense color="#ffcc00" background-color="white"/>
              <v-btn  color="#ffcc00" style="justify-self: start">
                {{$i18n.t('dialog.info.sendForm')}}
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </template>
  </main-dialog>
</template>

<script>
import MainDialog from "@/components/MainDialog";

export default {
  name: "InfoDialog",
  components: {MainDialog},
  props: {
    isVisible: {
      type: Boolean,
      required: true,
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
    }
  }
}
</script>

<style lang="scss">
.txt-yellow {
  text-align: left;
  color: #ffcc00;
  font-size: 1.25rem;
}
</style>