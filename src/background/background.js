console.log('Background script çalışıyor!');
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });