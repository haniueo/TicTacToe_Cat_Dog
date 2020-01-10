window.onload = function() {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1653743689-n1eadZKR";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "";

    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("nodeLiffIdErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};

/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
    } else {
        initializeLiff(myLiffId);
    }
};
function displayLiffData() {
    document.getElementById('isInClient').textContent = liff.isInClient();
    document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
}


// openWindow call
document.getElementById('openWindowButton').addEventListener('click', function() {
    liff.openWindow({
        url: 'https://tictactoe-2player.herokuapp.com',
        external: true
    });
});
// closeWindow call
    document.getElementById('closeWindowButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.closeWindow();
        }
    });
function sendAlertIfNotInClient() {
        alert('Tombol ini hanya untuk LIFF saja (っ´ω｀c) ');
    }
    
    /**
    * Toggle specified element
    * @param {string} elementId The ID of the selected element
    */
    function toggleElement(elementId) {
        const elem = document.getElementById(elementId);
        if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
            elem.style.display = 'none';
        } else {
            (elem.style.display = 'block');
        }
    }
