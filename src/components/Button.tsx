import { useEffect, useState } from "react";
import type { Message, Response } from "src/types";

export const Button: React.VFC = () => {
  const [state, setState] = useState<Response>({ id: "" });
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // current tab info
      const currentTab = tabs[0];
      const currentTabId = currentTab.id ?? 0;

      // content script communication
      chrome.tabs.sendMessage<Message>(currentTabId, { action: "getId" }, (res: Response) => {
        setState(res);
      });
    });
  }, []);

  const handleClick = () => {
    alert(state.id);
  };

  if (!state) return <div>Loading...</div>;

  return (
    <button onClick={handleClick} className="block p-2 mx-auto rounded border">
      Click Me!
    </button>
  );
};
