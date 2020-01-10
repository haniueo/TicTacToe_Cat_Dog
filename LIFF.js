window.onload = function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: "1653743689-n1eadZKR"
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err : LiffError) => {
            console.log(err.code, err.message)
    });

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
        external: false
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
}
