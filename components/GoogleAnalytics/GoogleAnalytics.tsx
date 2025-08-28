import { useEffect } from "react";
import { useCookieConsent } from "../../contexts/CookieConsentContext";

const GoogleAnalytics: React.FC = () => {
  const { cookiesAccepted } = useCookieConsent();

  useEffect(() => {
    if (cookiesAccepted && typeof window !== "undefined") {
      // Load Google Analytics script
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-6YYP4D08H6";
      document.head.appendChild(script1);

      // Initialize Google Analytics
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6YYP4D08H6');
      `;
      document.head.appendChild(script2);

      // Cleanup function
      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, [cookiesAccepted]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
