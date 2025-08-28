import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CookieConsentContextType {
  cookiesAccepted: boolean;
  setCookiesAccepted: (accepted: boolean) => void;
  hasUserInteracted: boolean;
  setHasUserInteracted: (interacted: boolean) => void;
  bannerVisible: boolean;
  setBannerVisible: (visible: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const [bannerVisible, setBannerVisible] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("uratuj-smartfona-cookies");
    if (savedConsent) {
      setCookiesAccepted(savedConsent === "true");
      setHasUserInteracted(true);
      setBannerVisible(false);
    }
  }, []);

  const handleSetCookiesAccepted = (accepted: boolean) => {
    setCookiesAccepted(accepted);
    setHasUserInteracted(true);
    setBannerVisible(false);
    localStorage.setItem("uratuj-smartfona-cookies", accepted.toString());
  };

  const value = {
    cookiesAccepted,
    setCookiesAccepted: handleSetCookiesAccepted,
    hasUserInteracted,
    setHasUserInteracted,
    bannerVisible,
    setBannerVisible,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
