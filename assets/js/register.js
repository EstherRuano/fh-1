const register = Vue.createApp({
    data: function(){
        return {
            isHidden: true,
            text: "tiro en los heuvos"
        };
    },
    methods: {
        mostra(){this.isHidden = false;}
    }
});
register.mount("#register");
