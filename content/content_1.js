seleniumAjax = {
  active: null
}

client.runtime.sendMessage({ monitor: true });

//listen to messages from background
client.runtime.onMessage.addListener(function (message) {
  if (message.state) {
    seleniumAjax.active += message.state.active
    afterMessage();
  }
})


function afterMessage() {
  console.log(seleniumAjax);
}
