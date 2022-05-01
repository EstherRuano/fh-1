const login = Vue.createApp({
    data: function(){
        return {
            user: "usuari1@gmail.com",
            u: "",
            pass: "123456",
            p:"",
            valid: false,
            isHidden:true
        };
    },
    methods: {
        setUser(event){ //event se pasa automáticamente sp que se genera un evento
            this.u = event.target.value; //r-value es vanilla JS
            this.valid= (this.user==this.u && this.pass==this.p);
        },
        setPass(event){ //event se pasa automáticamente sp que se genera un evento
            this.p = event.target.value; //r-value es vanilla JS
            this.valid= (this.user==this.u && this.pass==this.p);
        },
        comprova(){
            if(this.valid){
                location.href='landing_page.html';
            } else{
                this.isHidden=false;
            }
        }
    }
});
login.mount("#login");
