window.onload = function initializeLiff(myLiffId) {
    liff
        .init({
            liffId:myLiffId;
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}
function displayLiffData() {
    document.getElementById('browserLanguage').textContent = liff.getLanguage();
    document.getElementById('sdkVersion').textContent = liff.getVersion();
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
