import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import QueryProvider from "./QueryProvider";

type Props = { children: ReactNode };

function AppProvider({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        <QueryProvider> {children}</QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default AppProvider;
