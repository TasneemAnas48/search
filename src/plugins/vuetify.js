import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        defaultTheme: 'light',
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#276fff',
                secondary: '#ee1d32',
                accent: '#276fff',
            },
            
        },
    },
});
