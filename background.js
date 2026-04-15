// Background service worker for Custom DuelingBook extension
// Handles opening new tabs when requested from the content script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openTab') {
    chrome.tabs.create({ url: message.url, active: message.active !== false });
    sendResponse({ success: true });
  }
});
