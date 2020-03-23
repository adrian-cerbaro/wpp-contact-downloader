/*! wpp-downloader 2020-03-23 */

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([ {
            conditions: [ new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: "web.whatsapp.com"
                }
            }) ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
        } ]);
    });
});