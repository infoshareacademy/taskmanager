var zajawkapr = document.getElementById('zajawka-prawy');
zajawkapr.addEventListener('click', changePic);

function changePic() {
    if (zajawkapr.className == "zajawka-2") {
        zajawkapr.className = "zajawka-1";
    }
    else {
        zajawkapr.className = "zajawka-2";

    }
}