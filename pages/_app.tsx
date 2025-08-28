import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CookieConsentProvider, useCookieConsent } from "../contexts/CookieConsentContext";
import CookieConsentBanner from "../components/CookieConsent";
import GoogleAnalytics from "../components/GoogleAnalytics";

function AppContent({ Component, pageProps }: AppProps) {
  const { cookiesAccepted, setCookiesAccepted, hasUserInteracted } = useCookieConsent();

  const handleAccept = () => {
    setCookiesAccepted(true);
  };

  const handleDecline = () => {
    setCookiesAccepted(false);
  };

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
      {!hasUserInteracted && (
        <CookieConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <CookieConsentProvider>
      <AppContent {...props} />
    </CookieConsentProvider>
  );
}
