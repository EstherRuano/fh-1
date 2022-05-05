const landing = Vue.createApp({
    data: function(){
        return {
            desti: "",
            anada: "",
            tornada: ""
        };
    },
    methods: {
        envia(){
            location.href=('nova_maleta.html?desti=').concat(this.desti).concat('&anada=').concat(this.anada).concat('&tornada=').concat(this.tornada);
        }
    }
});
landing.mount("#landing");
