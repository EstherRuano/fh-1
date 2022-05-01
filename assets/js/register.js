const register = Vue.createApp({
    data: function(){
        return {
            isHidden: true,
        };
    },
    methods: {
        mostra(){this.isHidden = false;}
    }
});
register.mount("#register");
