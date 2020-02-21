(function() {

    "use strict";
    window.addEventListener("load", initialize);

    /**
     * Contains all of the eventListeners for interactivity.
     */
    function initialize() {
        let emailSubmit = document.getElementById("submit-form");
        emailSubmit.addEventListener("click", sendEmail);
    }

    function sendEmail() {
        
        let formData = document.getElementById("submit-form");
        console.log("test");
        console.log(formData);


        var http = new XMLHttpRequest();
        var url = 'email.php';
        var params = 'orem=ipsum&name=binny';
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);
    }
})();