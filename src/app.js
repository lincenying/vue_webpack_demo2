var Vue = require("vue"),
    App = require("./App.vue");
var vueResource = require('vue-resource');
Vue.use(vueResource);

var vm = new Vue({
    el: 'body',
    components: {
        app: App
    }
});
