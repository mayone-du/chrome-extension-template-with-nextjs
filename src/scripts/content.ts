import type { Message } from "src/types";

// You may need to use relative path import.
// import { } from "../constants";

// eslint-disable-next-line no-console
console.log("content script");

// If you want to get the DOM of the open page, you can do it here.
// document.querySelector("#some-id");

// wait sendMessage
chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
  if (request.action === "getId") {
    // eslint-disable-next-line no-console
    console.log("onMessage: ", request, sender, sendResponse);
    sendResponse({ id: "Got Content Script ID" });
  } else {
    sendResponse({ id: "No Action" });
  }
});

export {};
