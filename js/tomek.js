var introPic = document.getElementById('introRightBox');
//zajawkapr.addEventListener('click', changePic);

function changePic() {
    if (introPic.className == "introPic-2") {
        introPic.className = "introPic-1";
    }
    else {
        introPic.className = "introPic-2";

    }
}


setInterval(changePic,1500);