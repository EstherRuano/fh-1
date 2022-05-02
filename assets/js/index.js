const index = Vue.createApp({
    data: function(){
        return {
            desti: "",
            anada: "",
            tornada: ""
        };
    },
    methods: {
        envia(){
            location.href=('maleta_rapida_NoLogin.html?desti=').concat(this.desti).concat('&anada=').concat(this.anada).concat('&tornada=').concat(this.tornada);
        }
    }
});
index.mount("#index");
