function getProfile() {
    liff.getProfile().then((profile) => {
        console.log(JSON.stringify(profile))
        window.alert(JSON.stringify(profile))
    }).catch((e) => {
        console.log(e)
        window.alert(e)
    })
}
function sendMessage() {
    liff.sendMessage([{"type":"text", "text": "Hello Guys, Let's Play Tic Tac Toe !"}]).then ( () => {window.alert("message has been sent ^^")}).catch((e) => {window.alert(e)})
}
function login() {
    liff.login()
}
function openWindow() {
    liff.openWindow({
        url: "https://tictactoe-2player.herokuapp.com/"
    })
}
function closeWindow() {
    liff.closeWindow()
}
function logout() {
    if (liff.isLoggedIn()) {
        liff.logout();
        window.alert("success logout")
        location.reload();
    }
}
