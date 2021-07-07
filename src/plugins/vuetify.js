import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pl from 'vuetify/es5/locale/pl';
import colors from '@/assets/styles/_export.scss';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {}
    },
    lang: {
        locales: {pl},
        current: 'pl',
    },
    theme: {
        themes: {
            light: colors,
        },
    },
});
