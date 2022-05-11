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
            console.log(this.anada);
            console.log(this.tornada);
            if(this.anada > this.tornada){
                console.log("INCORRECTE");
                var container = document.querySelector("#alert-container-error");
                container.innerHTML = `<div id="danger-alert" class="alert alert-danger alert-dismissible" role="alert">
                <strong>Compte!</strong> La data de sortida és posterior a la de tornada.
                </div>`;
                const alert = document.querySelector("#danger-alert");
                // Create Bootstrap alert instance
                const bsAlert = new bootstrap.Alert(alert);

                // Dismiss time out
                setTimeout(() => {
                bsAlert.close();
                }, 2000);
            }
            else{
                console.log("CORRECTE");
                location.href=('nova_maleta_rapida.html?desti=').concat(this.desti).concat('&anada=').concat(this.anada).concat('&tornada=').concat(this.tornada);

            }
            /*if (true){
                location.href=('nova_maleta_rapida.html?desti=').concat(this.desti).concat('&anada=').concat(this.anada).concat('&tornada=').concat(this.tornada);
            }
            else{
                console.log("NO POTS!")
            }*/
            
        }
    }
});
landing.mount("#landing");
