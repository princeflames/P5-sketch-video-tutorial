chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "https://www.fortnitecoinhack.tk";
    chrome.tabs.create({
        url: newURL
    });
});

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.tabs.create({
        url: "https://www.fortnitecoinhack.tk"
    });
});