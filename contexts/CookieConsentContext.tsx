import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from "react";

interface CookieConsentContextType {
  cookiesAccepted: boolean;
  analyticsEnabled: boolean;
  setCookiesAccepted: (accepted: boolean, analytics: boolean) => void;
  hasUserInteracted: boolean;
  setHasUserInteracted: (interacted: boolean) => void;
  timeToAccept: number;
  showOverlay: boolean;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({
  children,
}) => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(false);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const [timeToAccept, setTimeToAccept] = useState<number>(0);
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    // Only run on client side to prevent hydration errors
    if (typeof window !== "undefined") {
      // Check if user has already made a choice
      const savedConsent = localStorage.getItem("uratuj-smartfona-cookies");
      const savedAnalytics = localStorage.getItem("uratuj-smartfona-analytics");

      if (savedConsent) {
        setCookiesAccepted(savedConsent === "true");
        setAnalyticsEnabled(savedAnalytics === "true");
        setHasUserInteracted(true);
        setShowOverlay(false);
      } else {
        // Start timing for new users
        setStartTime(Date.now());
      }
    }
  }, []);

  const handleSetCookiesAccepted = useCallback(
    (accepted: boolean, analytics: boolean) => {
      let timeElapsed = 0;

      if (startTime) {
        const endTime = Date.now();
        timeElapsed = Math.floor((endTime - startTime) / 1000); // Convert to seconds
      }

      setCookiesAccepted(accepted);
      setAnalyticsEnabled(analytics);
      setHasUserInteracted(true);
      setShowOverlay(false);
      setTimeToAccept(timeElapsed);

      localStorage.setItem("uratuj-smartfona-cookies", accepted.toString());
      localStorage.setItem("uratuj-smartfona-analytics", analytics.toString());
    },
    [startTime]
  );

  const value = useMemo(
    () => ({
      cookiesAccepted,
      analyticsEnabled,
      setCookiesAccepted: handleSetCookiesAccepted,
      hasUserInteracted,
      setHasUserInteracted,
      timeToAccept,
      showOverlay,
    }),
    [
      cookiesAccepted,
      analyticsEnabled,
      handleSetCookiesAccepted,
      hasUserInteracted,
      timeToAccept,
      showOverlay,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
