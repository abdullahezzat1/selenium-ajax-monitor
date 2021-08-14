client.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.monitor) {
    monitorTab(sender.tab.id)
  }
})


function monitorTab(tabId) {

  //add request to count
  client.webRequest.onBeforeRequest.addListener(function (details) {
    client.tabs.sendMessage(
      details.tabId,
      {
        state: {
          active: 1
        }
      }
    );
  },
    {
      urls: ["<all_urls>"],
      types: ["xmlhttprequest"],
      tabId: tabId
    },
    ['blocking']
  );


  //remove request from count once it's completed
  client.webRequest.onCompleted.addListener(function (details) {
    client.tabs.sendMessage(
      details.tabId,
      {
        state: {
          active: -1
        }
      }
    );
  },
    {
      urls: ["<all_urls>"],
      types: ["xmlhttprequest"],
      tabId: tabId
    }
  );



}
