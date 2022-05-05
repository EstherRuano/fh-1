const viz_maleta = Vue.createApp({
    data() {
        return {
            hideCard: true,
            selected: false
        };
    },
    methods: {
        hideNewOutfit(hide) {
            console.log(hide);
            this.hideCard = !(!hide && this.selected);
        },
        selectNewOutfit() {
            this.selected = true;
        }
    }
});

viz_maleta.mount('#viz_maleta')