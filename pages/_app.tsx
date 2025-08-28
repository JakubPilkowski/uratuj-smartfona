import type { AppProps } from "next/app";
import "../styles/globals.css";
import {
  CookieConsentProvider,
  useCookieConsent,
} from "../contexts/CookieConsentContext";
import CookieConsentBanner from "../components/CookieConsent";
import GoogleAnalytics from "../components/GoogleAnalytics";

function AppContent({ Component, pageProps }: AppProps) {
  const { cookiesAccepted, setCookiesAccepted, bannerVisible, setBannerVisible } =
    useCookieConsent();

  const handleAccept = () => {
    setCookiesAccepted(true);
  };

  const handleDecline = () => {
    setCookiesAccepted(false);
  };

  const handleCancel = () => {
    // Hide the banner without saving any preference
    setBannerVisible(false);
  };

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
      {bannerVisible && (
        <CookieConsentBanner
          onAccept={handleAccept}
          onDecline={handleDecline}
          onCancel={handleCancel}
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
