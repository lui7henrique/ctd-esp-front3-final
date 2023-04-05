import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from "dh-marvel/styles/material-theme";

import NextNProgress from "nextjs-progressbar";
import { CartContextProvider } from "context/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CssBaseline />
        <LayoutGeneral>
          <Component {...pageProps} />

          <NextNProgress
            color="#ED1D24"
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
          />
        </LayoutGeneral>
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */

          #__next {
            height: 100%;
          }
        `}</style>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
