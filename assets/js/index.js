$(function() {
    $('input[name="daterange"]').daterangepicker({
        "autoApply": true,
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Dg",
            "Dl",
            "Dt",
            "Dc",
            "Dj",
            "Dv",
            "Ds"
        ],
        "monthNames": [
            "Gener",
            "Febrer",
            "Març",
            "Abril",
            "Maig",
            "Juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre"
        ],
        "firstDay": 1
    }
}, function(start, end, label) {
  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
})});


const index = Vue.createApp({
    data: function(){
        return {
            desti: "",
            
        };
    },
    methods: {
        envia(){
            a = document.getElementById("dates").value;
            location.href=('maleta_rapida_NoLogin.html?desti=').concat(this.desti).concat('&dates=').concat(a);
        }

    }
});
index.mount("#index");
