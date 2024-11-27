export {};

declare global {
  interface Window {
    recaptchaOptions?: {
      useRecaptchaNet?: boolean;
      enterprise?: boolean;
    };
  }
}
