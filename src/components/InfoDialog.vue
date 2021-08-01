<template>
  <main-dialog :is-visible.sync="computedIsVisible" header-shadow is-gray :persistent="false"
               :title-text="$i18n.t('dialog.info.contactForm')" :title-class="'txt-yellow'" @agree="logData">
    <template #body>
      <div class="pa-5">

        <v-row no-gutters align="start" justify="start">
          <v-col>
            <v-form ref="form" v-model="isValid">
              <v-text-field :placeholder="$i18n.t('dialog.info.name')" outlined dense color="#ffcc00" autocomplete="given-name"
                            background-color="white" v-model="name"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.surname')" outlined dense color="#ffcc00" autocomplete="family-name"
                            background-color="white" v-model="surname"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.email')" outlined dense color="#ffcc00"
                            background-color="white" v-model="email"
                            :rules="[v => !!v || v === undefined || 'rules.required']"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.phone')" outlined dense color="#ffcc00"
                            background-color="white" v-model="phone"/>
              <v-text-field :placeholder="$i18n.t('dialog.info.messageSubject')" outlined dense color="#ffcc00"
                            background-color="white" v-model="messageSubject"
                            :rules="[v => !!v || v === undefined || 'rules.required']"/>
              <v-textarea :placeholder="$i18n.t('dialog.info.enterMessage')" outlined dense color="#ffcc00"
                          background-color="white" v-model="enterMessage"
                          :rules="[v => !!v || v === undefined || 'rules.required']"/>
              <v-btn color="#ffcc00" style="justify-self: start" @click="logData" :disabled="!isValid">
                {{ $i18n.t('dialog.info.sendForm') }}
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
  data: () => ({
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
</style>