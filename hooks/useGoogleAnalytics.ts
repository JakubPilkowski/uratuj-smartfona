import { useCallback } from "react";

interface GoogleAnalyticsEvent {
  event_category: string;
  event_label: string;
  value?: number;
  [key: string]: any;
}

export const useGoogleAnalytics = () => {
  const isGtagAvailable = useCallback(() => {
    return (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production" &&
      typeof window.gtag !== "undefined"
    );
  }, []);

  const trackEvent = useCallback(
    (action: string, parameters: GoogleAnalyticsEvent) => {
      if (isGtagAvailable()) {
        window.gtag("event", action, parameters);
      }
    },
    [isGtagAvailable]
  );

  const trackPromotionDialogDisplayed = useCallback(
    (timeToAccept: number) => {
      trackEvent("promotion_dialog_displayed", {
        event_category: "engagement",
        event_label: "free_screen_protection_offer_for_review",
        value: timeToAccept,
      });
    },
    [trackEvent]
  );

  const trackPromotionDialogAction = useCallback(
    (action: "google_review_clicked" | "dialog_closed") => {
      trackEvent("promotion_dialog_action", {
        event_category: "engagement",
        event_label: action,
        value: 1,
      });
    },
    [trackEvent]
  );

  return {
    isGtagAvailable,
    trackEvent,
    trackPromotionDialogDisplayed,
    trackPromotionDialogAction,
  };
};
