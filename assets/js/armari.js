const miapp = Vue.createApp({
    data() {
        return {
            recentSelected: false,
            favoritsSelected: false,
            papereraSelected:false
        };
    },
    methods:{
        selectedFolder(opcio){
            if ( opcio == 1 ){
                console.log("executant opcio 1");
                if(this.recentSelected==true){
                    this.recentSelected = false;
                }
                else{
                    this.recentSelected = true;
                }
                this.favoritsSelected = false;
                this.papereraSelected = false;
            }
            else if (opcio == 2){
                console.log("executant opcio 2");
                this.recentSelected = false;
                this.favoritsSelected = true;
                this.papereraSelected = false;
            }
            else if (opcio == 3){
                console.log("executant opcio 3");
                this.recentSelected = false;
                this.favoritsSelected = false;
                this.papereraSelected = true;
            }
        }
    }
});

miapp.mount('#app')