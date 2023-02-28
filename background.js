chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.doubleclick.net/*", "*://*.googleadservices.com/*"] },
  ["blocking"]
);
