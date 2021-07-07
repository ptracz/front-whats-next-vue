import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ikona_aktywnosc_OFF from '@/assets/icons/ikona_aktywnosc_OFF.png'
import ikona_aktywnosc_ON from '@/assets/icons/ikona_aktywnosc_ON.png'
import pl from 'vuetify/es5/locale/pl';
import colors from '@/assets/styles/_export.scss';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            activity_off: {
                component: ikona_aktywnosc_OFF
            },
            activity_on: {
                component: ikona_aktywnosc_ON,
            },
        }
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
