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

  const trackGoogleReviewScreenForOpinionClicked = useCallback(() => {
    trackEvent("google_review_screen_for_opinion_clicked", {
      event_category: "engagement",
      event_label: "free_screen_protection_offer_for_review",
      value: 1,
    });
  }, [trackEvent]);

  const trackGoogleReviewScreenForOpinionClosed = useCallback(() => {
    trackEvent("google_review_screen_for_opinion_closed", {
      event_category: "engagement",
      event_label: "free_screen_protection_offer_for_review",
      value: 1,
    });
  }, [trackEvent]);

  return {
    isGtagAvailable,
    trackEvent,
    trackPromotionDialogDisplayed,
    trackGoogleReviewScreenForOpinionClicked,
    trackGoogleReviewScreenForOpinionClosed,
  };
};
