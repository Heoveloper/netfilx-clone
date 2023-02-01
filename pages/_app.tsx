import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/use-auth";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      {/* HOC: Higher Order Component */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
};

export default MyApp;
