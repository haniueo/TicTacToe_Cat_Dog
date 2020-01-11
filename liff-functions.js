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
    liff.sendMessages([{"type": "text", "text": "Hello Minna !  |  Let's Play Tic Tac Toe Together (⁎˃ᆺ˂)  |  Thanks for play this game!  |  Don't Forget to check my social media : instagram.com/haniueo , github: github.com/haniueo  |"}]).then( ()=> { window.alert("Message has been sent")}).catch((e) => {window.alert(e)})
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
      url: "https://tictactoe-2player.herokuapp.com/",
      external: true
    });
  }

  function closeWindow(){
      window.alert("Are u Sure To Leave Me? (╥﹏╥)") 
    liff.closeWindow()
  }
  
  function logout(){
    if (liff.isLoggedIn()) {
      liff.logout();
      window.alert("Onichan Jangan Pergi 😿")
      location.reload();
    }
  }
