import type { Message } from "src/types";

// パスの解決ができなくなるため、絶対パスではなく相対パスで指定
// import { } from "../constants";

// eslint-disable-next-line no-console
console.log("content script");

// popupからメッセージを受信
chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
  // eslint-disable-next-line no-console
  console.log("onMessage: ", request, sender, sendResponse);
  sendResponse({ id: "foo" });
});

export {};
