client.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.monitor) {
    monitorTab(sender.tab.id)
  }
})


function monitorTab(tabId) {
  let requests = {}

  //add request to count
  client.webRequest.onBeforeRequest.addListener(function (details) {
    // requests[`${details.requestId}`] = details;
    // console.log(details);
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

  //remove request if it's redirected
  client.webRequest.onBeforeRedirect.addListener(function (details) {
    // delete requests[`${details.requestId}`];
    // console.log(requests);
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


  //remove request from count once it's completed
  client.webRequest.onCompleted.addListener(function (details) {
    // delete requests[`${details.requestId}`];
    // console.log(requests);
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


  //also remove request from count if it ends with an error
  client.webRequest.onErrorOccurred.addListener(function (details) {
    // delete requests[`${details.requestId}`];
    // console.log(requests);
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
