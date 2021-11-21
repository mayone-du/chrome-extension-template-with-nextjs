import type { Message } from "src/types";

// You may need to use relative path import.
// import { } from "../constants";

// eslint-disable-next-line no-console
console.log("content script");

// wait sendMessage
chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
  // eslint-disable-next-line no-console
  console.log("onMessage: ", request, sender, sendResponse);
  sendResponse({ id: "foo" });
});

export {};
