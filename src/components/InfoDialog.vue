<template>
  <main-dialog :is-visible.sync="computedIsVisible" header-shadow is-gray :persistent="false"
               :title-text="$i18n.t('dialog.info.contactForm')" :title-class="'txt-yellow'" @agree="logData"
               @modalClosed="resetForm">
    <template #body>
      <div class="pa-5">

        <v-form ref="form" v-model="isValid">
          <div class="formDiv">
            <v-text-field :placeholder="$i18n.t('dialog.info.name')" outlined dense color="#ffcc00"
                          autocomplete="given-name" style="flex: 0 0 45%"
                          background-color="white" v-model="name"/>
            <v-text-field :placeholder="$i18n.t('dialog.info.surname')" outlined dense color="#ffcc00"
                          autocomplete="family-name" style="flex: 0 0 45%"
                          background-color="white" v-model="surname"/>
            <v-text-field :placeholder="$i18n.t('dialog.info.email')" outlined dense color="#ffcc00"
                          background-color="white" v-model="email"
                          :rules="rules" style="flex: 0 0 100%"/>
            <v-text-field :placeholder="$i18n.t('dialog.info.phone')" outlined dense color="#ffcc00"
                          background-color="white" v-model="phone" style="flex: 0 0 45%"/>
            <v-text-field :placeholder="$i18n.t('dialog.info.messageSubject')" outlined dense color="#ffcc00"
                          background-color="white" v-model="messageSubject"
                          :rules="rules" style="flex: 0 0 70%"/>
            <v-textarea :placeholder="$i18n.t('dialog.info.enterMessage')" outlined dense color="#ffcc00"
                        background-color="white" v-model="enterMessage"
                        :rules="rules" style="flex: 0 0 100%"/>
            <v-btn color="#ffcc00" @click="logData" :disabled="!isValid">
              {{ $i18n.t('dialog.info.sendForm') }}
            </v-btn>

          </div>
        </v-form>
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
  data: vm => ({
    rules: [v => !!v || v === undefined || vm.$i18n.t('rules.required')],
    name: '',
    surname: '',
    email: '',
    phone: '',
    messageSubject: '',
    enterMessage: '',
    isValid: false,
  }),
  computed: {
    computedIsVisible: {
      get() {
        return this.isVisible;
      },
      set(nV) {
        this.$emit('update:isVisible', nV);
      },
    }
  },
  methods: {
    resetForm() {
      console.log('form reset');
      this.$refs.form.reset();
    },
    logData() {
      console.log(this.$data);
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

.formDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>