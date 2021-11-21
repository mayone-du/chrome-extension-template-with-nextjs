import "tailwindcss/tailwind.css";

import type { CustomAppProps } from "next/app";
import { memo } from "react";

const App = memo((props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return <>{getLayout(<props.Component {...props.pageProps} />)}</>;
});

export default App;

App.displayName = "App";
