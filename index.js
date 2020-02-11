(function() {

    "use strict";
    window.addEventListener("load", initialize);

    /**
     * Contains all of the eventListeners for interactivity.
     */
    function initialize() {
        let emailSubmit = document.getElementById("button");
        emailSubmit.addEventListener("click", sendEmail);
    }

    function sendEmail() {
        
    }
})();