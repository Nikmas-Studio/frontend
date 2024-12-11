'use client';

import { useEffect } from 'react';

function RecaptchaSettings(): null {
  useEffect(() => {
    window.recaptchaOptions = {
      enterprise: true,
    };
  }, []);

  return null;
}

export default RecaptchaSettings;
