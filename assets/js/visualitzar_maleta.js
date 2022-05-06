const viz_maleta = Vue.createApp({
    data() {
        return {
            hideCard: true,
            selected: false,
            recentSelected: false,
            favoritsSelected: false,
            papereraSelected:false
        };
    },
    methods: {
        hideNewOutfit(hide) {
            this.hideCard = !(!hide && this.selected);
        },
        selectNewOutfit() {
            this.selected = !this.selected;
        },
        selectedFolder(opcio){
            if ( opcio == 1 ){
                console.log("executant opcio 1");
                this.recentSelected = !this.recentSelected;
                this.favoritsSelected = false;
                this.papereraSelected = false;
            }
            else if (opcio == 2){
                console.log("executant opcio 2");
                this.recentSelected = false;
                this.favoritsSelected = !this.favoritsSelected;
                this.papereraSelected = false;
            }
            else if (opcio == 3){
                console.log("executant opcio 3");
                this.recentSelected = false;
                this.favoritsSelected = false;
                this.papereraSelected = !this.papereraSelected;
            }
        }
        
    }
});

viz_maleta.mount('#viz_maleta')