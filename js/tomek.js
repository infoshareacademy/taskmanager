var zajawkapr = document.getElementById('zajawka-prawy');
zajawkapr.addEventListener('mouseover', changePic);

function changePic() {
    if (zajawkapr.className == "zajawka-2") {
        zajawkapr.className = "zajawka-1";
    }
    else {
        zajawkapr.className = "zajawka-2";

    }
}

