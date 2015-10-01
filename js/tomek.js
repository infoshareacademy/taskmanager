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


$(function () {
    $('#newsletter').on('submit',function (event) {
        var $form = $(this);
        // get all the inputs into an array.
        var $inputs = $form.find(':input');

        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        var $logInStatusContainer = $('#submit-status');

        // get users.json to lookup for username and password
        $.post('/taskmanager/pp.php', values,function (message) {

                $logInStatusContainer.text(message);
        });
        $logInStatusContainer.text('Checking...');

        //console.log(values);

        return false;
    });
});