// Google Analytics gtag interface
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

export {};
