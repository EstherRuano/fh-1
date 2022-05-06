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
        //s'executa al desar i al cance·lar, segons hide (cancel -> hide = true i anàleg per desa)
        hideNewOutfit(hide) {
            this.hideCard = !(!hide && this.selected);
            //treu la selecció del outfit tant si cancel·la com si desa
            this.selected = false;
        },
        //s'executa quan es clica sobre un outfit per seleccionar-lo
        selectNewOutfit() {
            this.selected = !this.selected;
        },
        //mostra alerta
        showAlert() {
            //mostra que ha estat un èxit només quan la card de l'outfit esta per ensenyar
            if(!this.hideCard){
                var container = document.querySelector("#alert-container");
                container.innerHTML = `<div id="succeed-alert" class="alert alert-success alert-dismissible" role="alert">
                <strong>Èxit!</strong> Outfit afegit correctament a la maleta.
                </div>`;
                const alert = document.querySelector("#succeed-alert");
                // Create Bootstrap alert instance
                const bsAlert = new bootstrap.Alert(alert);

                // Dismiss time out
                setTimeout(() => {
                bsAlert.close();
                }, 2000);
            }
        },
        //lògica de pestanyes
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