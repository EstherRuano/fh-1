const index = Vue.createApp({
    data: function(){
        return {
            desti: "",
            anada: "",
            tornada: ""
        };
    },
    methods: {
        setDesti(event){ //event se pasa automáticamente sp que se genera un evento
            this.desti = event.target.value; //r-value es vanilla JS
        },
        envia(){
            location.href=('maleta_rapida_NoLogin.html?desti=').concat(this.desti);
        }
    }
});
index.mount("#index");
