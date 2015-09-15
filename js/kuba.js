/**
 * Created by jakubmatyka on 15.09.15.
 */
function formvalidation(){
    var adres = document.getElementById("email");
    if(adres.value.indexOf("@") < 0) {
        alert("Brak małpy!");
    }
}

document.getElementById("zapisz_sie").addEventListener("click", formvalidation);