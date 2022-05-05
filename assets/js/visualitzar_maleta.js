const viz_maleta = Vue.createApp({
    data() {
        return {
            hideCard: true,
            selected: false,
            peca: true,
        };
    },
    methods: {
        hideNewOutfit(hide) {
            console.log(hide);
            this.hideCard = !(!hide && this.selected);
        },
        selectNewOutfit() {
            this.selected = true;
        },
        onChange(event) {
            this.peca = !this.peca;
        }
    }
});

viz_maleta.mount('#viz_maleta')