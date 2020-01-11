function getProfile(){
    liff.getProfile().then((profile) => {
      console.log(JSON.stringify(profile))
      window.alert(JSON.stringify(profile))
    }).catch( (e) => {
      console.log(e)
      window.alert(e)
    })
  }
  function getAccessToken(){
    window.alert(liff.getAccessToken())
  }
  function getContext(){
    window.alert(JSON.stringify(liff.getContext()))
  }

  function sendMessage(){
    liff.sendMessages([{"type": "text", "text": "Hello Minna ! </br> Let's Play Tic Tac Toe Together (⁎˃ᆺ˂) </br> Thanks for play this game! </br> Don't Forget to check my social media :"}]).then( ()=> { window.alert("Message has been sent")}).catch((e) => {window.alert(e)})
  }
  
  function login(){
    liff.login()
  }

  function scanCode(){
    liff.scanCode().then( (result) => {
      window.alert(JSON.stringify(result))
    }).catch( (e) => {
      window.alert(e)
    })
  }

  function openWindow(){
    liff.openWindow({
      url: "https://sirateek.me",
      external: true
    });
  }

  function closeWindow(){
    liff.closeWindow()
  }
  
  function logout(){
    if (liff.isLoggedIn()) {
      liff.logout();
      window.alert("Successfully to Logout")
      location.reload();
    }
  }
