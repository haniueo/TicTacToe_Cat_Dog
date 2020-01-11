const liffId = "1653743689-n1eadZKR"
liffId.init( {liffId: liffId}, () => {}, (err) => {window.alert(err)} )
if (liff.isLoggedIn()) {
    liff.getProfile().then( (profile) => {
        document.getElementById("profileImage").src = profile.pictureUrl
        document.getElementById("displayName").innerHTML = profile.displayName
        document.getElementById("pictureUrl").href = profile.pictureUrl
        document.getElementById("pictureUrl").innerHTML = profile.pictureUrl
    }).catch( (e) => {
        document.getElementById("displayName").innerHTML = " No data, " + e
        document.getElementById("pictureUrl").innerHTML = "No data," + e
    })
} else {
    document.getElementById("displayName").innerHTML = "No data, Please login onichan!"
    document.getElementById("pictureUrl").innerHTML = "No data, Please login onichan!"
    
}
document.getElementById("isInClient").innerHTML = liff.isInClient() 
document.getElementById("isLoggedIn").innerHTML = liff.isLoggedIn()
