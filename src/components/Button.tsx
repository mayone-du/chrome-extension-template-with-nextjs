import { useEffect, useState } from "react";
import type { Message, Response } from "src/types";

export const Button: React.VFC = () => {
  const [state, setState] = useState<Response>({ id: "" });
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // 現在のタブ情報を取得
      const currentTab = tabs[0];
      const currentTabId = currentTab.id ?? 0;

      // content scriptと通信
      chrome.tabs.sendMessage<Message>(currentTabId, { type: "hoge" }, (res: Response) => {
        // content scriptからのレスポンスをstateにセット
        setState(res);
      });
    });
  }, []);

  const handleClick = () => {
    alert(state.id);
  };

  if (!state) return <div>Loading...</div>;

  return (
    <button onClick={handleClick} className="block p-2 rounded border">
      Click Me!
    </button>
  );
};
