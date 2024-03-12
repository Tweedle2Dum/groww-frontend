import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function ThemeProvider({ children }: Props) {
  return <>{children}</>;
}

export default ThemeProvider;
