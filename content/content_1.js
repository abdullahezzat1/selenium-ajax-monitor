client.runtime.sendMessage({ monitor: true });

//listen to messages from background
client.runtime.onMessage.addListener(function (message) {
  if (message.state) {
    // console.log(message.state.active);
    window.postMessage({
      type: 'seleniumAjax',
      params: {
        active: message.state.active
      }
    })
  }
});



let pageScriptURL = client.runtime.getURL('page/page_script.js');
let scriptElement = document.createElement('script');
scriptElement.src = pageScriptURL;
document.documentElement.appendChild(scriptElement);


