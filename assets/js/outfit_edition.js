filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const outfit_app = Vue.createApp({
    data: function() {
        return {
            opcio: 3,
            img_outfit: "assets/img/avatars/stick-figure.png"
        };
    },
    methods: {
        changeOutfit(opcio) {
            this.opcio = opcio;
            if (this.opcio == 1) {
                console.log("apretat");
                this.img_outfit = "assets/img/outfits/outfit_pantalons.png";
            } else if (this.opcio == 2) {
                this.img_outfit = "assets/img/outfits/outfit_sencer.png";
            } else if (this.opcio == 3) {
                this.img_outfit = "assets/img/avatars/stick-figure.png";
            }
        },
        enviaOutfit() {
            if(this.opcio == 2){
                location.href = ('outfit.html?mostra=1');
            }else{
                location.href = ('outfit.html?mostra=2');
            }
        }
    }
});
outfit_app.mount("#outfit_app");