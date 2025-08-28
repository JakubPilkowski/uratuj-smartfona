import type { AppProps } from "next/app";
import "../styles/globals.css";
import {
  CookieConsentProvider,
  useCookieConsent,
} from "../contexts/CookieConsentContext";
import CookieConsentBanner from "../components/CookieConsent";
import CookieConsentOverlay from "../components/CookieConsent/CookieConsentOverlay";
import GoogleAnalytics from "../components/GoogleAnalytics";

function AppContent({ Component, pageProps }: AppProps) {
  const { setCookiesAccepted, hasUserInteracted, showOverlay } =
    useCookieConsent();

  const handleAccept = (analytics: boolean) => {
    setCookiesAccepted(true, analytics);
  };

  const handleDecline = () => {
    setCookiesAccepted(false, false);
  };

  return (
    <>
      <CookieConsentOverlay show={showOverlay}>
        <Component {...pageProps} />
        <GoogleAnalytics />
      </CookieConsentOverlay>
      {!hasUserInteracted && (
        <CookieConsentBanner
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
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
